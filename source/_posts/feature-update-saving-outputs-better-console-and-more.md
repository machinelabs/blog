---
title: Feature update - Saving outputs, better console and much more
date: 2017-09-13 14:20:00
tags: announcement, features
---

It's time for another MachineLabs feature update! Today we're excited to announce that MachineLabs finally supports saving and downloading of outputs. To learn more about this and other new things that landed in our code base, read on!

<!-- more -->

### Saving and downloading trained models

When training neural nets, we want to save the trained knowledge so we can use it later in applications or even take it as a starting point for another training. It was just a matter of time and we can't be more excited to say that MachineLabs finally supports saving and downloading of outputs, and it's super easy to do!

Simply write all the data that should be persisted as part of an execution to a special `./outputs` directory. MachineLabs will take care of uploading the data to our storage and makes them available as downloads via the new outputs view.

{% asset_img "downloads.gif" "Download outputs" %}

You can take a look at our [MNIST showcase lab](https://machinelabs.ai/editor/r1JhQGJDb/1505301844242-Bk28rcL9Z?file=main.py&tab=outputs) and download its trained model from there!

Soon, we'll offer REST APIs so you can even request trained models from your labs in other applications!

### Better console

We also shipped a better terminal component that supports proper TTY output to improve the overall experience when observing a lab's learning progress. This means, the generated terminal output in MachineLabs should look exactly like what you would see when running your training on your local machine!

{% asset_img "better-terminal.gif" "Better Terminal" %}

### Lab templates

We want to make it as easy as possible to get started with Machine Learning. People new to MachineLabs may not know where to starttart and what the possibilities are. That's why MachineLabs offers lab templates that get you started right away! Simply choose your template from the toolbar. More templates will be added in the future, however, today you can already start your journey by trying out our MNIST template!

{% asset_img "nested-menu.gif" "Lab templates" %}

### Cleanup execution lists

Whenever you executed a lab, an execution gets added to the lab's execution list. This is great because it gives you a nice overview of your different experiments, plus, it enables you to run different experiments in parallel.

Often however, we want to try out things and sometimes they don't work out the way we want. For example, maybe our code doesn't compile. This will result in an execution that doesn't really add any value to the overall execution list.

In MachineLabs, you can remove executions you aren't important anymore. Simply activate the execution's options menu and hit "Remove".

{% asset_img "remove-executions.gif" "Remove executions" %}

### Deleting Labs

So far one could only create new labs but was never able to actually remove any. In order to let users clean up their profiles, we added a feature to delete labs. You can delete your lab by opening the settings dialog, select the "Advanced" tab and enter the name of your lab to confirm the deletion.

{% asset_img "delete-labs.gif" "Remove Labs" %}

### Deeplink support for tabs

Another smaller, but still powerful feature: you can now deeplink into selected tabs of the editor view. This means every time you share your lab with a friend or your Twitter followers, they will end up in exactly the same tab you visited the last time.

### What's next?

Of course, we will continue shipping more useful features. In fact we're almost done with another pretty important feature that will improve the overall experience when working with MachineLabs. Here's what's on our roadmap right now:

- Folder support in lab file trees
- Commandline arguments support in ml.yaml files
- Uploads of custom datasets
- Docs, guides and tutorials on a new dedicated website that will help you getting started

... and much more!

### Follower growth 

If you want to stay up to date with what we're working on, also make sure to follow us [on twitter](https://twitter.com/machinelabs_ai). We've seen many new followers in our Twitter channel and we're very excited about soon hitting the 600 followers mark!

#### Joining the private beta

As always, you can still join our private beta. All you have to do is to visit [machinelabs.ai](https://machinelabs.ai) and login with your GitHub account. We will put you in the next batch!

