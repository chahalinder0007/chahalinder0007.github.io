---
title       : "Expanding Bernauli's Theorm to Real World - Amazon Reviews"
date        : 2021-06-02T10:00:01+05:30
description : "Getting an understanding of Bayes Theorm with a real world example of assessing Amazon reviews statistically"
feature_image: "/images/blog/amazon_review/share_title.jpeg"
image: "/images/blog/amazon_review/share_title.jpeg"
share-img: "/images/blog/amazon_review/share_title.jpeg"
author: Inderjit Singh Chahal
tags: [Mathematics, Probability, Amazon]
---

## Setting the objective

In this blog we will try and explore the implementation of the Bernauli's Theorm beyond the classical cases and try to get some useful information out of one of the implementation for a real world situation. 

This blog will be part 1 of a two Part series where we explore bernauli's theorm to get hold of probability of getting a positive experience after buying a product online given that there are number of sellers available and all of them have similar positive reviews based on different number of total reviews for the same product.

In this part we will be looking at simulating the solution on order to try and understand how the distribution of data looks like, for the sake of simplicity we are going to assume that we are familiar with the real **positive experience** that a given Seller provides.


## The Problem statement

Lets talk about **3 sellers** selling golf balls online. We know from our *highly placed sources* that the sellers are using trickery to only ship a certain fraction of genuine products, the rest are a cheap copy passed on with a bigger brand's logo.

We will assume a following profile for these sellers

- ***Seller_1***
  - **Number_of_reviews**: 5
  - **positive_reviews** : 4
  - **genuine_products** : 0.95 (menaing only 95% of the products shipped by this seller are genuine)

- ***Seller_2***
  - **Number_of_reviews**: 50
  - **positive_reviews** : 45
  - **genuine_products** : 0.95 (menaing only 95% of the products shipped by this seller are genuine)

- ***Seller_3***  
  - **Number_of_reviews**: 100
  - **positive_reviews** : 95
  - **genuine_products** : 0.95 (menaing only 95% of the products shipped by this seller are genuine)



![coming_soon](/images/Portfolio/demo/SalX.gif)



## To - Do

- [ ] Get code for simulating and visualizing dataset
- [ ] Show simulation videos in the blog

