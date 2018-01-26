---
title: Introducing Private labs, Editor improvements and more
date: 2018-01-29 15:30:00
tags: announcement, features
---

Earlier this month we've announced that [we've entered public beta](/2018/01/08/machinelabs-is-now-in-public-beta/) and MachineLabs is now open to everyone, making it (hopefully) easier to enter the field of Machine Learning. With this new chapter we also started working on implementing new features that make our platform even more useful.

Read on to learn more about private labs, a better profile page and more!

<!-- more -->


### Private Labs

MachineLabs has been an open platform from the very first day on. We embrace the idea of making it easy to share your Machine Learning experiments. That's why labs can be viewed by and shared with everyone right in the browser.

However, sometimes we want to work on something in stealth mode. Maybe we're just trying stuff out and don't want to clutter public labs with trials and errors. Or maybe we're using MachineLabs for company internal tasks that shouldn't be done out in the open. There are various reasons why one would create and run labs behind the curtains.

Today we're excited to announce the support of private labs for all of our [Patreon Backers](https://www.patreon.com/machinelabs)!

{% asset_img "private_labs.gif" "Private labs" %}

Making labs private is as easy as setting the private flag in your lab settings. Once a lab is private it will be only visible to you, including its executions. You can find all your public and private labs on your own profile page. Notice that private labs can be recognized by the little "private" badge.

As a Patreon Backer you get this and more features to come, so if you haven't yet

### A better profile page

With private labs in place we've overhauled MachineLabs user profile page as well. With our latest release, you can now see all executions of a lab right in the card item, similar to our [Recent Labs Section](/2017/11/08/feature-update-landing-page/).

{% asset_img "profile_page.gif" "Improved profile page" %}

We display the latest three executions of a lab, making it every easy to jump straight into the execution you're interested in!

### Editor code completion

Last but not least we've improved our new editor as well. In our last release we've replaced our editor, which was an Ace Editor, with Microsoft's Monaco editor. That's the same one that is used in Visual Code as well.

While simply replacing the editor already improved the overall experience a lot, we keep adding things to make it better every time. As of today, you get code completion in a lab's `ml.yaml` file. 

{% asset_img "ml-editor-code-completion.gif" "Code completion" %}

And this is just the start! We're working on more code completion features for common Python libraries as well.

### What's to come

While you're reading this post, we're probably working on the next features, including a new [consumer CLI](https://twitter.com/machinelabs_ai/status/954477306596286464) that will make it very easy to import existing Machine Learning projects into MachineLabs.

Stay tuned!
