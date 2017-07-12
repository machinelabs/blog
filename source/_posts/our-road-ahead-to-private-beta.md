---
title: Our road ahead to private beta
date: 2017-07-12 21:00:00
tags: announcement
---


It's been eight weeks since we [announced our upcoming service MachineLabs](/2017/05/08/introducing-machinelabs) to the world. We've opened the gates to [apply for the private beta](https://get.machinelabs.ai ) which is just around the corner. Today we would like to reflect on our recent progress and the road ahead.

<!-- more -->

### MachineLabs, Inc. is now a thing

First things first. We are super happy to unveil that **we just founded MachineLabs, Inc.** After we've implemented a first prototype of MachineLabs, we knew we are onto something and decided pretty quickly after that, to bootstrap a new company as soon as possible. 

Here's our brand new company logo, carefully crafted with <3 by [Judith Kutscheid](http://www.judithkutscheid.de).

{% asset_img "machinelabs_logo_blue_black_b.png" "MachineLabs, Inc. Logo" %}

### Private beta subscribers and feedback

In the last two months we've received tons of great signups for our private beta and we can clearly see that people "get it" and are excited to give our so called "CodePen for Machine Learning" a try.

Here's what some of Udacity's nanodegree students wrote:

>I am studying machine learning and doing the Udacity Self Driving Car nanodegree. I'm interested to see if this tool can help me with my studies.

One of our favourites comes from a teacher who is interested to use MachineLabs for their classes. Yes, we want to help making teaching ML much simpler and more accessible..

>I teach machine learning labs at a local school and with a tool like this my lab setup time could be cut down to a fraction of what they are now and the students could focus on the core material.

Here's a another one from a big company which we slightly changed to keep the company name private.

>	I work for [PROTECTED]. We're probably doing more with AI than any other financial company. I'd love to see if this is something we can put to good use.

We are really excited to see all these different use cases, projects and ideas that people want to use MachineLabs for, and we are doing our best to make all this happen!

Let's take a closer look at our recent progress, brand new features and our road ahead.

### Executions at the forefront of our experience

Executions play the most important role at MachineLabs. A lab is very much compareable to a fiddle in [JSFiddle](https://jsfiddle.net/), a plunk in [Plunkr](http://plnkr.co/edit/) or a pen [CodePen](https://codepen.io/pen). However, the code you run in a lab is usually a long running process that can take up to several hours or even days.

Whenever you run a lab a new execution is started with the current state of the file tree from the editor. You'll see the output being streamed to you in real-time and in the future you'll be able to follow all sorts of visualizations in real-time as well.

All executions show up in the sidebar and keep running no matter if you move on, to further fiddle with the code or even leave the application. You can tweak the code and start more executions with just the click of a button. You can also go back and forth between executions to view the dedicated real-time stream or output simply by selecting them. Executions can also be stopped or restarted right from the sidebar.

{% asset_img "new-execution-list.gif" "Execution view" %}
<br>

This comes especially convenient when you want to test different approaches or parameters against each other. In other words, labs are version controlled very much like Git repositories which makes it very easy to try out different things. 

At this point, each lab is public by default (with private labs planned further down the road), so everybody can see the code and even follow each execution in real-time. However, only the owner of a lab can actually start or stop executions.

If you like to execute code from a lab that doesn't belong to you, simply fork it to make it your own and all the features mentioned above apply to it as well!

### Configure your lab via the `ml.yaml` file

There are several configurations that play quite an important role for the executions. For instance, which framework do we want to use? Should it be TensorFlow, Keras or Caffe and do we need Python 2 or 3?

Each lab comes with an `ml.yaml` file by default that lets us configure these things in a human-friendly way.

{% asset_img "ml.yaml-screenshot.png" "ml.yaml" %}
<br>

Soon it will also be possible to define downloads in this file so that they can be fetched and cached to reduce overall execution times.

The cool thing about the `ml.yaml` approach is that it serves as a single source of truth to these configurations. In the future it will be possible to not only create and manage labs through our app but through a CLI as well! Having these configurations in a config file as part of the file tree ensures that they work across different clients (app, CLI) to our service.

### Got it! But when, when, when?!

If this all got you excited, rest assured we are equally thrilled about getting that thing out in your hands asap!

We are currently building some last important pieces to make sure we are ready to open the gates for the first bunch of people to work with the platform.

**During the private beta every participant can use the platform at absolutely zero costs.** However, we need to make sure to cap the monthly free usage to prevent unwanted effects.

That's the most critical part that we are currently still busily working on. Once that's done, we'll ramp up our production system to ship a first version.


### Request your private beta invite

We launch our private beta very soon, with a few selected people.If you like to apply, head over to [our registration page](http://get.machinelabs.ai), tell us about your background and why you want to use MachineLabs and request your personal privat beta invite!

Seats are limited!

Also, make sure to follow us on [Twitter](http://twitter.com/machinelabs_ai) and don't miss any updates!

