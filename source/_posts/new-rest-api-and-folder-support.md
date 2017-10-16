---
title: New REST API and folder support
date: 2017-10-16 14:20:00
tags: announcement, features
---

Just a week ago we [announced a couple more features](/2017/10/09/feature-update-file-previews-guides-and-patreons/) including output file previews. We constantly keep working on improving the MachineLabs platform and today we're excited to talk about two more features!

<!-- more -->

### A brand new REST API for trained models

Training neural nets can take a long time. When we implemented [a simple style transfer](/2017/09/26/a-neural-style-transfer-in-the-browser/) using MachineLabs, [the training](https://machinelabs.ai/editor/rJQrQ5wjZ/1506415557004-HkTTQ5Dob?file=ml.yaml&tab=editor) took about seven (7) hours. To be fair, this could already be improved by running the same lab on different but optimized hardware. However, even if we train our nets on high performance hardware, depending on the problem we're trying to solve, training can still take hours, if not even days.

This can be particularly frustrating when working on top of existing work. Wouldn't it be a waste of time to re-train every net just to continue where we left off?

That's why we're super excited to announce our brand new REST API for generated outputs! Starting today everyone can simply fetch any generated output from any public lab using our REST API, enabling everyone to accelerate their work based upon other people's work and existing data.

TODO bring some example here

We will continue adding endpoints to MachineLabs REST API as features require them. You can always read about all available endpoints in our [official docs](https://docs.machinelabs.ai).

### Folder support in labs for better code organization

So far a lab could only have top level files, meaning that it wasn't possible to have directories and nested folder structures. This is obviously a crucial feature to have as projects can often have complex file structures so code can be organized properly. MachineLabs now supports folders and files in labs, enabling everyone to created nested file structures as needed!

{% asset_img "file-tree.gif" "File tree" %}
<br>
Folders and files can be created, edited and deleted right in place. Want to add a folder in the root level? Simply hit the "Add folder" button at the top of the file tree. Want to add a file inside an exising folder? Simply hit the "Add file" button of the folder, which shows up when hovering over it.

{% asset_img "file-tree-buttons.gif" "File tree" %}
<br>

With folder support in place, this paves the path to create a MachineLabs CLI that lets you easily push your Machine Learning projects into labs!

### What's next?

As always, we're continuing implementing crucial features to make your Machine Learning experience with MachineLabs as pleasant as possible. Here's what we're working on right now:

- Mounting of (custom) datasets
- Explore page
- More configuration options for `ml.yaml`

... and much more!


#### Joining the private beta

As always, you can still join our private beta. All you have to do is to visit [machinelabs.ai](https://machinelabs.ai) and login with your GitHub account. We will put you in the next batch!

Also, don't forget to [follow us on Twitter](https://twitter.com/machinelabs_ai) for recent updates.
