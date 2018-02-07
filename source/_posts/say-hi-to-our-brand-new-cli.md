---
title: Say hi to our brand new CLI
date: 2018-02-09 19:00:00
tags: announcement, features, cli
---

It's been a little over a week since [we shipped Private Labs, an overhauled profile page and editor code completions](/2018/01/29/introducing-private-labs-editor-improvements-and-more/). Today we're excited to announce that we shipped again! Read on and say 'hi' to our brand new CLI!

<!-- more -->


### Easy entry, great productivity 

MachineLabs aims to provide the most simple entry to Machine Learning. Users can literally land on [machinelabs.ai/editor](https://machinelabs.ai/editor), write code that uses TensorFlow, Keras or other popular Machine Learning frameworks and start potentially long running executions with the click of a button.

Being able to start with Machine Learning straight from the browser is a great way to get going. Especially with our recent switch to the same editor that Visual Studio Code uses, it's already quite a pleasant user experience.

Wouldn't it be cooler if we could also easily import existing experiments into the MachineLabs platform, or even pull labs onto our local machines to fiddle offline in our favourite IDE?


### Meet our new CLI

Today we're proud to ship the very first version of a new Command Line Interface (CLI) to complement the web interface. The CLI acts as an alternative way to interact with the MachineLabs platform. 

We've been using the CLI internally over the last couple of weeks and believe it's already a great improvement for the overall user experience. To make sure to get it out as soon as possible, we've released a version that supports pulling labs down to the local file system as well as pushing labs from the local file system into the cloud.

This enables great workflows where we can use our beloved local IDE to do the bulk of the work and then send the code to the MachineLabs cloud to run it on optimized hardware.


With future releases we'll add more useful features such as running executions and streaming the output to the local terminal.

### Installing the CLI

In order to get started with the CLI we first have to install it either with `yarn global add @machinlabs/cli` or `npm install -g @machinelabs/cli`.

{% asset_img "ml_install.gif" "Installing the CLI" %}

Once the CLI is installed we can run it through the `ml` command which will also give us a nice overview of possible commands.

{% asset_img "ml_help.gif" "Getting help from the CLI" %}

### Using the CLI

Now that we have the CLI installed, let's do a quick  "Hello World" example of how to get started.

Let's suppose we want to start new project locally. The first thing we want to do is to navigate into the directory that should become our project folder and run `ml init`. This will create a default `ml.yaml` as well as a `main.py` in the directory if they don't exist yet. Having a `ml.yaml` is mandatory as it configures how our execution will use the MachineLabs platform. If you aren't familar with that, you may want to read more about configuring labs in our [official guide](https://docs.machinelabs.ai/guide/configuring-labs.html).

The `main.py` is the default entry point for all labs today. In the future we'll be more flexible with the environment so that we can also run e.g NodeJS stuff with deeplearn.js.

Let's change our `main.py` to simply print out a string.

```python
print('hello world')
```

Now that we have a `ml.yaml` and a `main.py` sitting next to each other, we can run the code on our local system by calling `python main.py`. Next, we want to run it in the MachineLabs cloud.

Therefore we have to login the CLI to the MachineLabs platform. Notice that when we login from the CLI, we'll be redirected to [machinelabs.ai](https://machinelabs.ai) to connect the CLI with the same user that we use in the web interface. That means, that if we haven't already logged in to [machinelabs.ai](https://machinelabs.ai) with our regular account, the CLI will connect as an anonymous user which can only create but not run labs.

Bottom line, we should make sure to log into [machinelabs.ai](https://machinelabs.ai) with our regular user account *before* we login with CLI. Don't worry though if you connected the CLI to an anonymous user, we can login again as often as we want.


After we logged in to the web interface, we can run `ml login` and accept the request to connect the CLI with our user account at the following screen.

{% asset_img "ml_login.gif" "Logging in to the CLI" %}

After a short moment the CLI will print that we are now logged in. Now we can run `ml push` to send our local lab from the file system to the MachineLabs platform.

The CLI will print a link to the online lab right into our terminal. We can continue to call `ml push` to update the online lab with the state from our local machine as often as we want.

But that's not the end of the story yet. Let's open the lab in the browser and make a change from the web interface and save it.

{% asset_img "ml_push.gif" "Pushing to the CLI" %}

We can now run `ml pull` to pull the current state of the lab back to our local machine.

Isn't that cool? We can now follow a workflow that easily keeps a local program state in sync with an online version and vice versa.

There's still more to learn about the CLI, so feel free to head over to the official documentation at [docs.machinelabs.ai](https://docs.machinelabs.ai).


{% patreon %}