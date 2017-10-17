---
title: Two weeks in private beta, shipping new features!
date: 2017-08-22 15:30:00
tags: announcement, features
---

It's been less than two weeks since we've officially [opened up the gates for our MachineLabs Private Beta Program](/2017/08/11/launching-private-beta). Today we would like to reflect on the launch and show you what we've shipped since then.

<!-- more -->

### More users, more feedback

A couple of months back when we started to work on [MachineLabs](https://machinelabs.ai) we developed the plan go through a private beta phase. The idea was to work with a handful of people to **gather feedback** and build a stable platform before we'll open up the gates for everyone.

Over the last months we've seen the demand grow faster than what we had expected with hundreds of people queuing up to get their hands on what we've built.

We're excited to work with all of you and your feedback is incredibly valuable for us!

Today we've already onboarded way more people than what we've had initially planned for our private beta. We'll continue to let it grow to a **couple of hundreds**, reacting to your feedback, fixing bugs and shipping features, eventually paving the way to a **public beta** in which everyone can instantly join without a waiting list.


### New Features

Of course, we kept on building and shipping new features. Here's what we've landed in the last two weeks.

#### Pausing the output stream

While we currently don't support storing outputs such as the trained model, images or other data, one can still get valuable feedback from the stream of STDOUT/STDERR messages that comes from each execution. Unfortunately though, examining live output wasn't really feasible just yet. The output always jumped to the bottom as new data arrived.

Today we're happy to announce that we've added a feature to **pause the output** which makes it super smooth to scroll through the output, take screenshots or animated gifs like this one.

{% asset_img "pause_output_2.gif" "Pause Output" %}


#### Infinite output streaming

Turns out, being able to pause the stream is just one way to improve the experience of the execution output.

To prevent spam to our platform we've had a hard cap of 100,000 STDOUT/STDERR messages per execution **for the live stream**.

Unfortunately though, we've hit this cap quite soon already with LSTM networks that **ran for many hours or even days** and which constantly wrote output. In such cases, the execution was still ongoing but you weren't able to follow its output anymore once the execution had reached the message limit.

Guess what? Our latest update fixes that, too! We've now implemented a way to **infinitely stream the message output** to you. The way that works is that we recycle the space efficiently while guaranteeing two things:

1. Users who currently watch the output won't miss a single message

2. Users who just visited the execution will see a reasonable sized chunk from the beginning, a reasonable sized chunk from the latest messages plus all future live messages.

With these two guarantees in mind we can continously throw away a large chunk of messages to make room for new ones. Keep in mind that this only affects the live message streaming and you'll still be able to **download the entire log as text files** in the future.

#### And much more...

Apart from these two main features we've implemented plenty of stability improvements and fixes to ensure you'll have a smooth experience using [MachineLabs](https://machinelabs.ai).

### What's next?

Of course, we're not done yet. Far from it. We're just warming up for the bigger features such us **stored outputs** or **GPU support**. Stay tuned.

### How do I join the private beta?

All you have to do to join the **MachineLabs Private Beta Program** is to head over to [MachineLabs](https://machinelabs.ai) and login with your GitHub account. This will automatically put you on the waiting list. We'll notify you as soon as we activate your account for private beta usage.

{% patreon %}