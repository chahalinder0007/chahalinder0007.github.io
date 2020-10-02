---
title       : "How I finally understood Bayes Theorem"
date        : 2020-10-02T11:00:01+05:30
description : "How my understanding of Bayesian rule come along from a formula to the real world implementations"
feature_image: "/images/blog/banes/post_like_dist.jpg"
image: "/images/blog/bayes/post_like_dist.jpg"

author: Inderjit Singh Chahal
tags: [mathematics, probability]
---


I came across Bayesian theorem a lot early in my education carrier, much like Thomas Bayes himself, I was not able to grasp the importance of this masterpiece. Additionally, much like most of the concepts at the time I just jumped over the understanding of the same and was mostly focused on solving some predefined pattern questions and never bothered to figure out how the theorem can actually be put to use in the real-world implementations. Now when I look back it was not a very wise decision to make, as almost all of the risk management strategies in my automated trading algorithms were impossible without Bayes and his work, particularly the Bayes theorem. 

Once I did realize my mistake I spent good 2 weeks on trying to get the hold of it, watching countless videos, going through a number of blogs, and posts around the same. No significant headway was being made, as I was always able to sort of get the idea and remember the formula maybe think of the use case that was explained in the blog or the video, but the true understanding was missing, the level of comfort I intended to have with it was just not there, which was very frustrating to say the very least.

The worst part about not being able to understand something properly is that people who do understand always make it look so trivial so easy, one feels like probably I am dumb and I am just MESSING never going to be good enough to be able to understand anything and should just quit. Well thankfully I didn’t and now I think I have a pretty good understanding of the same. I will outline how I understood this classic and maybe that is helpful to someone who is going through the same phase.



If I were, to sum up, a learning lesson for logical thinking that I had taken away from Bayesian is 

***“The new or current evidence should not cause us to discard the old beliefs completely but to merely update the same with the new information coming in"***

I was most intrigued by the **Conjunction fallacy**, it is an example of irrational[?] behavior in an experiment by renowned Nobel Prize winner Daniel Kahneman, I will borrow explanation of the setup from wikipedia, the link to the complete explanation is accessible [here](https://en.wikipedia.org/wiki/Conjunction_fallacy).

	The most often-cited example of this fallacy originated with Amos Tversky and Daniel Kahneman. Although the description and person depicted are fictitious, Amos Tversky secretary at Stanford was named Linda Covington, and he named the famous character in the puzzle after her.

	Linda is 31 years old, single, outspoken, and very bright. She majored in philosophy. As a student, she was deeply concerned with issues of discrimination and social justice, and also participated in anti-nuclear demonstrations.

	Which is more probable?

	1. Linda is a bank teller.
	2. Linda is a bank teller and is active in the feminist movement.

	The majority of those asked chose option 2. However, the probability of two events occurring together (in "conjunction") is always less than or equal to the probability of either one occurring alone

Now this is an interesting problem to solve, but to make a logical conclusion we need to draw from our previous understanding of the the Bayes Theorem, recall that we had prophesied that new evidence or new data should not create new beliefs but should update our existing beliefs. 

Let us review this problem now in light of the ......




Let’s get few jargons out of the way first so we are able to focus on the fun stuff:
1. Prior
2. Likelihood
3. Posterior