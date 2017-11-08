---
title: Feature update - Landing page
date: 2017-11-08 15:30:00
tags: announcement, features
---

It's been a little over two weeks since our last feature update where we have introduced [a REST API and folder support in MachineLabs](/2017/10/16/new-rest-api-and-folder-support). We are constantly working on improvements and most importantly a better experience for our users. Today we are stoked to announce another important feature that we're bringing onto the streets.

Read on for more information!

<!-- more -->

### A brand new landing page

Successful collaboration and especially knowledge transfer is only possible if there are means to explore what's going on on MachineLabs. That said, people kept creating awesome labs but there was no way to actually see when someone has built something cool. In fact, we were experiencing the same problem and only accidently came across very interesting experiments, such as [a lab that solves the Mountain Car problem](https://machinelabs.ai/editor/rJ2nBk2TZ?tab=editor&file=main.py) or a [Multivariate Time Series Forecasting with LSTMs in Keras](https://machinelabs.ai/editor/SyCOIWCaZ?tab=editor&file=main.py).

That's why we sat down to come up with a way to make exploring new and exciting labs easier than before. Today we are super excited to announce our brand new landing page that let's you explore recent labs.

{% asset_img "explore_recent_labs.png" "Explore recent labs" %}

With this feature we enable everyone to easily explore the most recent labs and executions. In addition, the landing page is now a proper entry point to MachineLabs. While the editor is probably the most crucial part of the platform, people may want to find inspiration first and see what other people are doing. Therefore, we decided to introduce a formal landing page. From there, the editor is only one click away.

Also worth mentioning is that the executions listed for each lab update in real-time. Labs, however, are will not update in real-time because it wouldn't be very practical if they are constantly re-ordering while exploring recent labs.

### What's next?

While we know this will improve the overall experience for users to find new, interesting experiments, we won't stop there. In the near future we'll add a dedicated exploration page that adds additional features for exploring labs like search, filtering, and more.

Furthermore, we are improving how users can consume datasets to train their models. Downloading datasets in MachineLabs is as easy as [defining their locations on the iternet inside a configuration file](/2017/09/26/a-neural-style-transfer-in-the-browser/). However, that only works for small datasets which are fast enough to download with every execution. For larger datasets we'll enable users to upload datasets which can be mounted at runtime. This will also allow us to provide a wide range of publicly available datasets free to use for everyone to explore exciting experiments.

Last but not least, we are putting a lot of effort into enabling GPU support.

Sounds interesting? Stay tuned for more updates!

{% patreon %}