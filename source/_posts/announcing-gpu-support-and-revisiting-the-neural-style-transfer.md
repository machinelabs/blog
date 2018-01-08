---
title: Announcing GPU support and revisiting the neural style transfer
date: 2017-11-20 10:00:00
tags: announcement, features
---

It's been less than two month since we [demoed a neural style transfer](/2017/09/26/a-neural-style-transfer-in-the-browser/) (aka photo to Picasso) that can be forked and fiddled with straight in the browser. It's been a major milestone for us but we've also been clear that it's really just the absolute tip of the iceberg.

Back then, our experiment ran on CPU and applying the style transfer took several hours. It's been one of our biggest promises to enable users to run Machine Learning code on blazingly fast optimized GPU-accelerated hardware.

Today, we are happy and excited to announce GPU support for the MachineLabs platform!

<!-- more -->

### Revisiting our previous style transfer

Before we dive into the details of GPU support, let's quickly revisit our [previous style transfer](/2017/09/26/a-neural-style-transfer-in-the-browser/) that ran on CPU.

Various different style transfer implementations exist today. The one we choose for our previous experiment did not seperate between a training and application phase. Instead, it needed just one base image (a regular photo) and one style image (the artistic one) and iterated until the base image matched the artistic style of the style image. That's a bit of an oversimplification but let's not get too distracted by the details of the process.

### An alternative approach

Today we would like to try out an alternative approach where we split things up in two phases:

1. A time consuming training phase where a certain style is learned by our neural net.

2. An application phase where the trained style can be applied quickly to any given image.

In other words, where the previous approach took a lot of time per each image that we wanted to style, the new approach just takes a lot of time to learn a style once but can then be quickly applied to any given image. That's a huge win.

So, why didn't we demo that approach right from the start?

Well, there are two problems with that approach that our platform couldn't handle back then but are possible today.

1. The approach needs a huge set (multiple GB) of photos for the training with which wasn't feasible on the MachineLabs platform two months ago [using just lab inputs](/2017/09/26/a-neural-style-transfer-in-the-browser/).

2. The approach isn't pracicable without GPU support as the training would take **weeks** to run on CPU.

### A quick introduction to mounts

As stated above, our new approach needs many gigabytes of images as training data to learn from. So far, the only practical way to get such data into our labs was to configure it as `inputs` which are downloaded right before code execution.

Unfortunately though, this technique is limited to smaller, faster downloads and can get annoying during development as the dataset has to be downloaded again and again every time that we click the *run* button.

Today we are not only introducing GPU but also slightly touch on yet another new feature that we will highlight in more detail in another dedicated blog post soon: **Mounts**.

What's a mount you ask? In short, we are giving all users space on our platform to upload files and folders that can be mounted into an execution at runtime. With mounts, we can practically work with datasets of any size without paying the extra costs of unnecessary downloading the data over and over again.

Another exciting aspect of this is that we can make lots of datasets available for our users to play with.

In case of our new style transfer, mounting the images that are needed for the training looks like this:

```yaml
mounts:
    - path: machinelabs/fast-style-transfer/small
      name: training_images
```

The important take away from this is that we will find all our training images in`/machinelabs/mounts/training_images` at runtime. More on that in a future post!

### Training our neural net

As mentioned before, the whole process will run in two phases. For clarity we'll split things up into two labs accordingly. Let's first focus on the lab that does the actual training.

We are creating a bunch of files to setup our neural network and training task. It's out of the scope of this article to discuss the details of the implementation. Also, we didn't came up with the code, credits belong to [Logan Engstrom](https://twitter.com/logan_engstrom/) who wrote the [initial version](https://github.com/lengstrom/fast-style-transfer) which we just slightly modified to run on the latest TensorFlow version.

Let's focus on the parts that are unique to the MachineLabs platform. We already explained how to mount the dataset but there are a couple of other things that we need to configure to get going. In particular, we need to:

1. Download pre-trained weights (VGG19) and tell our script where to find them.

2. Download our style image (the artistic one)

2. Tell our script where to find the training images

3. Configure where to store the trained model

4. Enable GPU and pick a GPU compatible docker image

Downloading the pre-trained weights and the style image is done via `inputs` and looks like this.

```yaml
inputs:
    - name: imagenet-vgg-verydeep-19.mat
      url: http://www.vlfeat.org/matconvnet/models/beta16/imagenet-vgg-verydeep-19.mat
    - name: style_image.jpg
      url: https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vincent_Van_Gogh_0018.jpg/614px-Vincent_Van_Gogh_0018.jpg
```
If you aren't familar with `inputs` you may want to read more about them in our [documentation](https://docs.machinelabs.ai/guide/configuring-labs.html#Lab-inputs-datasets).

As you can see we are using a popular painting from Vincent van Gogh and download it straight from wikipedia.

{% asset_img "614px-Vincent_Van_Gogh_0018.jpg" "Van Gogh style image" %}


All the rest boils down to passing the right parameters to our script. Let's highlight the most important ones: The `--style` parameter takes the path to the style image which we downloaded to `inputs/style_image.jpg`, `--vgg-path` needs to be set to the path to our VGG19 weights, which is `inputs/imagenet-vgg-verydeep-19-mat` and `--train-path` takes the path to our mounted training images.

Also, note that the`checkpoint-dir` needs to be set to `outputs` as this is where the trained model will be saved to. All files saved to the `outputs` directory will be uploaded and linked with our execution so that we can later download them either through the web app or via REST API.

```yaml
parameters:
    - pass-as: --style=inputs/style_image.jpg
    - pass-as: --vgg-path=inputs/imagenet-vgg-verydeep-19.mat
    - pass-as: --train-path=/machinelabs/mounts/training_images
    - pass-as: --checkpoint-dir=outputs
    - pass-as: --content-weight=1.5e1
    - pass-as: --checkpoint-iterations=1000
    - pass-as: --batch-size=4
    - pass-as: --epochs=2
```
You can [read more about outputs](/2017/09/13/feature-update-saving-outputs-better-console-and-more/) and [the REST API](/2017/10/16/new-rest-api-and-folder-support/) in our past announcement posts.

Last but not least, we need to enable our brand new GPU support and pick a GPU enabled docker image to base our training on.

So far, we've added two docker images based on the latest and greatest versions of TensorFlow and Keras that have GPU support enabled. The only difference between both images is that one is using Python 2.1 whereas the other one is using Python 3.1.

Our script is based on Python 2.1 so we'll set the `dockerImageId` to `tensorflow_v1-4-x-gpu_python_2-1` accordingly.

All there is left for us to do before we can kick off the training is to configure the `hardwareType` to be `gpu`. Notice that this setting defaults to `cpu` when omitted.

Now fasten your seatbelt and hit the _Run_ button!

### Applying the style transfer to any image

It takes several hours for the training to be done and the trained model to appear in the outputs tab of our lab.

{% asset_img "outputs_style_transfer.png" "Trained model in outputs tab" %}

Meanwhile we've setup a second lab with a bunch of source files for the actual application of the learned style transfer. Again, we don't want to focus on the implementation but rather on how to use MachineLabs to wire things up.

Using our REST API, we can request the trained model from the first lab to load and use it.

From the perspective of our second lab that isn't any different than configuring any other download.

```yaml
inputs:
    - name: checkpoint
      url: https://rest.machinelabs.ai/executions/1511130272168-rJuiVF1eM/outputs/checkpoint
    - name: fns.ckpt.index
      url: https://rest.machinelabs.ai/executions/1511130272168-rJuiVF1eM/outputs/fns.ckpt.index
    - name: fns.ckpt.data-00000-of-00001
      url: https://rest.machinelabs.ai/executions/1511130272168-rJuiVF1eM/outputs/fns.ckpt.data-00000-of-00001
    - name: source_image.jpg
      url: https://blog.thoughtram.io/images/banner/company-offsite-group.jpg
```

Notice that TensorFlow splits the trained model into multiple files which is why we see three configured inputs. Also notice that we've added another download for the `source_image.jpg` which is the image that we want to style. In the future there will be a more convenient way to do this but for now we have to use `inputs` as a way to get such files into our lab.

The code of the second lab, takes a bunch of parameters again. The `--checkpoint` tells the script where to read the trained model from. Remember, these are the three files that we configured as `inputs` and the `--checkpoint` parameter expects only the containing directory which is obviously `inputs`. The `--in-path` parameter takes the path to the image that we want to style and since we want the style image to be preserved and uploaded for us we also have to set the `--out-path` to `outputs`.


```yaml
parameters:
    - pass-as: --allow-different-dimensions
    - pass-as: --checkpoint=inputs
    - pass-as: --in-path=inputs/source_image.jpg
    - pass-as: --out-path=outputs
```

And that's it! Let's run the code to apply the style transfer within seconds. We can view and download the produced image in the outputs tab.

And since this style can now be applied to many images within seconds, let's just try it out with a couple of different photos!

{% asset_img "multi_styled.png" "Styled image" %}

Isn't that some beautiful art?

Of course, we've done all the hard work for you, so you can just go ahead and checkout the labs for the [training](https://machinelabs.ai/editor/HyH9fY1lM/1511130272168-rJuiVF1eM?tab=editor&file=%2Fmain.py) and for the [application](https://machinelabs.ai/editor/ryGF9Mxgz/1511179201251-HkF6QSxgf?tab=outputs&file=%2Fmain.py&preview=-KzOIIiCiOKoMJIshATc) of the style transfer to see everything in action.

### Enabling GPU support for your account

While MachineLabs is still in Private Beta we are granting GPU support exclusively for users who are backing our [crowd funding campaign on Patreon](https://patreon.com/machinelabs).

Let's answer the most common questions!

**Why do I have to pay for GPU support?**

Let's face it, GPU is very expensive! We are a small team with a tight budget trying to move the whole Machine Learning community forward.

We believe it is important to not leave AI exclusively to the big players but rather have some small indie teams go after it as well.

You can make a difference by [supporting us on our mission](https://patreon.com/machinelabs)!


**What if I'm not in the Private Beta yet but want to try out GPU support?**

Guess what, as a supporter of our Patreon campaign you'll bypass the waiting queue. We'll activate your account for Private Beta and GPU right away!

**How much money do I need to pledge and how many GPU hours do I get?**

We are enabling GPU support for all backers that are backing $10 or more per month. In return you'll get rewarded with **20 GPU hours** on top of the 72 CPU hours every single month.

**I can't afford $10 / month. Is there another way to enable GPU support?**

Yes! We'll enable GPU support for selected users that are supporting us by creating awesome labs or embedding labs in their blog posts.

Reach out to us via Email or twitter and let us know if you've created something!

**I pledeged on Patreon. How long does it take for the GPU support to get activated?**

Bear with us! Enabling GPU support for our Patrons is a manual process for the time being. Please give us 24 hours to enable your account and get back to you. If your GPU support isn't enabled after 24 hours, please shoot us an email to hello at machinelabs.ai.
