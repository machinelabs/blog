---
title: A neural style transfer in the browser
date: 2017-09-26 17:46:00
tags: announcement, features
---

We couldn't be more excited to share yet another feature update with you. Starting of today the `ml.yaml` file that configures each execution just got a whole lot more powerful as you can now configure inputs as well as script parameters. With these two features in place, we'd like to take you on a journey to demo how you can build the most simple neural style transfer!

<!-- more -->

### Downloading inputs

Machine Learning is all about building software that learns from data. But how do we get access to that data from within our execution?

Each execution has full internet access so you can basically do whatever you want to access datasets from any reachable place.

That said, having to write boiler plate code just to download some datasets can be very tiresome and frustrating. After all, MachineLabs is about eliminating common Machine Learning frustration points to make the whole field much more accessible.

Today, we are happy to announce that you can define inputs in the `ml.yaml` file which we will download before the execution code starts to make them available in the `inputs` directory.

```yaml
inputs:
    - name: mnist.npz
      url: https://s3.amazonaws.com/img-datasets/mnist.npz
    - name: reuters.npz
      url: https://s3.amazonaws.com/text-datasets/reuters.npz
    - name: imdb.npz
      url: https://s3.amazonaws.com/text-datasets/imdb.npz
```
Each input is specified with an `url` and a `name` that will be used as the file name. This means, we can download files with conflicting names and define a different name for the actual written file.

{% asset_img "downloads_blog_final_cropped.gif" "Downloading inputs" %}

We even get nice progress bars for all our concurrent downloads.


### Specifying parameters

Every now and then we'd like to make our scripts parameterizable or come a cross an existing script that we would like to use which expects parameters.

Until now scripts that needed parameters could not be used with MachineLabs without rewriting parts of the script itself.

Today we are introducing another upgrade to the `ml.yaml` file that makes it possible to use such parameters.

```yaml
parameters:
    - pass-as: 'inputs/base_image.jpg'
    - pass-as: 'inputs/style_image.jpg'
    - pass-as: 'outputs/generated_'
    - pass-as: '--iter=10'
```

Parameters are passed to the script in the specified order making it possible to use positional arguments as well as any other values.

### Building a neural style transfer in the browser

Let's put our two new tools at work and build a neural style transfer without leaving our browser! A neural style transfer is the fancy academic term to describe the process of applying the style of a reference image (typically artistic) to another image. The technique became very popular in 2016 with the initial release of the [PRISMA](https://prisma-ai.com/) app which enabled users to take any photo from their smartphone and turn it into stunning art.

Today there exists several demos for different Machine Learning frameworks that allow us to play around with this technique. We'd like to show you how easy it is to put one of these demos to work using the popular Keras framework with MachineLabs.

First we need an image that we'd like to turn into a stunning piece of art.

{% asset_img "company-offsite-group.jpg" "Company Offsite Picture" %}

We took an image that shows the entire MachineLabs team at our very first [company offsite in Spain](https://blog.thoughtram.io/company/2017/08/17/company-offsite-2017.html) this summer.

Next, we need a picture that we want to take the style from to apply it on our base image.

{% asset_img "van_gogh.jpg" "Van Gogh Painting" %}

This one is a popular painting by Van Gogh but it could be any picture we like.

The entire magic happens within the `main.py` file but we didn't come up with that. It's one of the [example scripts from Keras](https://github.com/fchollet/keras/blob/master/examples/neural_style_transfer.py) and it's out of the scope of this article to discuss the inner workings of this.

For now, we want to focus on how you can quickly put that demo code to work, apply it on your on photos and tinker with the code. In fact, we believe that MachineLabs offers the simplest possible way to run your own neural style transfer code today.

Assuming you are already participating in our private beta (you should!), it only takes three simple steps to put that code to work.

**1. [Open our neural style transfer demo lab](https://machinelabs.ai/editor/rJQrQ5wjZ/1506415557004-HkTTQ5Dob?file=ml.yaml&tab=editor)**

**2. Change the parameters in the `ml.yaml` file**

Change `https://blog.thoughtram.io/images/banner/company-offsite-group.jpg` to any picture that you'd like to turn into a Van Gogh. Of course, you can also change the value of the first parameter to take a different style reference image if this Van Gogh painting is not your cup of tea. 

The third parameter configures the result prefix and should be kept as `outputs/generated_` as it implicitly specifies the path where the generated images are saved. In our [previous article](https://blog.machinelabs.ai/2017/09/13/feature-update-saving-outputs-better-console-and-more/) we described that `outputs` is a special path that we can write to in order to preserve any generated files from our execution.

The script will iterate ten times by default and create an image for each iteration. We only save the last five images though.

**3. Hit the `Fork & Run` button to fork the lab and start the execution**

The execution takes about 8 hours so feel free to get some sleep and look at the results tomorrow. Once you come back you can checkout the output tab and download the generated images from there.

This is what our generated images looked like.

{% asset_img "processed_image.png" "Image with applied style transfer" %}

We can also find in the [outputs tab of the execution](https://machinelabs.ai/editor/rJQrQ5wjZ/1506415557004-HkTTQ5Dob?file=main.py&tab=outputs) where we can directly download it from.

If you apply this demo to your own images, please give ping us at  [@machinelabs](https://twitter.com/machinelabs_ai) on Twitter.

### What's next?

This is really just scratching the surface of what we aim to achieve. We'll soon ship a bunch of other features that will enable more and more advanced use cases.

 Here's what's on our roadmap right now:

- Folder support in lab file trees
- Uploads of custom datasets
- REST API to access outputs
- GPU support
- Docs, guides and tutorials on a new dedicated website that will help you getting started

... and much more!

### Keep in touch

If you want to stay up to date with what we're working on, also make sure to follow us [on twitter](https://twitter.com/machinelabs_ai). 

#### Joining the private beta

As always, you can still join our private beta. All you have to do is to visit [machinelabs.ai](https://machinelabs.ai) and login with your GitHub account. We will put you in the next batch!

