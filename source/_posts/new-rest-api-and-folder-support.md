---
title: New REST API and folder support
date: 2017-10-16 14:20:00
tags: announcement, features
---

Just a week ago we [announced a couple more features](/2017/10/09/feature-update-file-previews-guides-and-patreons/) including output file previews. We constantly keep working on improving the MachineLabs platform and today we're excited to talk about two more features!

<!-- more -->

### A brand new REST API for outputs

Training neural nets can take a long time. When we implemented [a simple style transfer](/2017/09/26/a-neural-style-transfer-in-the-browser/) using MachineLabs, [the training](https://machinelabs.ai/editor/rJQrQ5wjZ/1506415557004-HkTTQ5Dob?file=ml.yaml&tab=editor) took about seven (7) hours. To be fair, this could already be improved by running the same lab on different but optimized hardware. However, even if we train our nets on high performance hardware, depending on the problem we're trying to solve, training can still take hours, if not even days.

Since the training can be very time consuming, it's not unusual in Machine Learning to take a pre-trained model as a starting point for further work.

A couple of weeks ago, [we announced](https://blog.machinelabs.ai/2017/09/13/feature-update-saving-outputs-better-console-and-more/) that we had implemented a feature to save generated assets such as the trained model. But so far, such outputs could only be downloaded using the UI which limited the possible use cases.

Today we are super excited to announce our brand new REST API to further improve ergonomics for generated outputs! Now everyone can simply fetch any generated output from any public lab using our REST API, enabling everyone to accelerate their work based upon other people's work and existing data.

To use the API, all we have to do is a `GET` request to `https://rest.machinelabs.ai/execution/{execution-id}/ouputs/{filename}`. Let's put that at work.

In this [demo lab](https://machinelabs.ai/editor/Hy8uCrfTW/1508168255909-S1_rMIfTW?tab=editor&file=main.py) we're configuring in the `ml.yaml` to request the file `trained_model.h5` which was generated from [another lab](https://machinelabs.ai/editor/SJSppBMTZ/1508167210403-BkM40Bzpb?file=main.py&tab=outputs).

```yaml
inputs:
    - url: https://rest.machinelabs.ai/executions/1508167210403-BkM40Bzpb/outputs/trained_model.h5
      name: pre_trained_model.h5
```

With this configuration in place the file will be available under `./inputs/pre_trained_model.h5` at runtime so that loading the model becomes a simple oneline.

```python
model = load_model('./inputs/pre_trained_model.h5');
```

We will continue adding endpoints to MachineLabs REST API as features require them. You can always read about all available endpoints in our [official docs](https://docs.machinelabs.ai).

### Folder support in labs for better code organization

So far a lab could only have top level files, meaning that it wasn't possible to have directories and nested folder structures. This is obviously a crucial feature to have as projects can often have complex file structures so code can be organized properly. MachineLabs now supports folders and files in labs, enabling everyone to created nested file structures as needed!

{% asset_img "file-tree.gif" "File tree" %}
<br>
Folders and files can be created, edited and deleted right in place. Want to add a folder in the root level? Simply hit the "Add folder" button at the top of the file tree. Want to add a file inside an exising folder? Simply hit the "Add file" button of the folder, which shows up when hovering over it.

{% asset_img "file-tree-buttons.gif" "File tree" %}
<br>

Not only does this feature make it way easier to migrate existing projects to MachineLabs, it will also pave the way for a MachineLabs CLI that will let you easily push your local Machine Learning projects into labs!

### What's next?

As always, we're continuing implementing crucial features to make your Machine Learning experience with MachineLabs as pleasant as possible. Here's what we're working on right now:

- Uploaded datasets that can be mounted at runtime
- An explore page to discover other public labs
- More configuration options for `ml.yaml`

... and much more!

#### Joining the private beta

As always, you can still join our private beta. All you have to do is to visit [machinelabs.ai](https://machinelabs.ai) and login with your GitHub account. We will put you in the next batch!

Also, don't forget to [follow us on Twitter](https://twitter.com/machinelabs_ai) for recent updates.


#### Like what you see? Support us on Patreon!

MachineLabs, Inc is a small, dedicated and 100 % bootstrapped company. Our main goal is to provide the community with better tools to move the whole Machine Learning ecosystem forward.

You can make a difference and support us on our mission, [become a Patreon](www.patreon.com/machinelabs)!
