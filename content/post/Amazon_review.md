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
  - **genuine_products** : 0.95 (meaning only 95% of the products shipped by this seller are genuine)

- ***Seller_2***
  - **Number_of_reviews**: 50
  - **positive_reviews** : 45
  - **genuine_products** : 0.95 (meaning only 95% of the products shipped by this seller are genuine)

- ***Seller_3***  
  - **Number_of_reviews**: 100
  - **positive_reviews** : 95
  - **genuine_products** : 0.95 (meaning only 95% of the products shipped by this seller are genuine)

## Lets cheat by simulation

A good way to get the solution with a little bit of coding is that we can run simulation and check beforehand what the solution is going to look like. Here we are going to make use of some python code to create the same.

Lets start by importing some required libraries

```python
import numpy as np
```
Second lets create a function to simulate what will happen if we randomly choose a situation when the seller gets only 5 reviews, how will these reviews look like. The following function does exactly that for us.

```python
def create_one_simulation(genuine_products = 0.95,total_reviews=5):
    simulate_five_shippings = np.random.rand(total_reviews)
    # 1 will mean that the customer who got the product gave a good review
    simulated_review = np.where(simulate_five_shippings > genuine_products, 0, 1)
    return simulated_review
```

Now we need to keep track of each simulation, to do that we will be storing in all the values of each simulation run by creating a demo step **n** number of times. In the code just below we are doing a simulation for *seller 1*, ***10000*** times

```python
num_simulations_to_run = 10000
total_reviews = 5
occurances = dict(zip(range(1,total_reviews+1),np.zeros(total_reviews,np.int32).tolist()))
for i,val in enumerate(range(num_simulations_to_run)):
    single_simulation = np.count_nonzero(create_one_simulation(total_reviews=total_reviews))
    occurances[single_simulation]+=1
    plt.scatter(occurances.keys(),occurances.values())
    plt.savefig(f"blog_amazon_review_1/count_{i}")
print(occurances)
```

A sample output from one of the runs looks like:
> {1: 0, 2: 16, 3: 215, 4: 2131, 5: 7638}

To aggregate all the image files saved from the code's output simply do 
```bash
ffmpeg -start_number 0 -i count_%d.png -c:v -vf -vcodec mpeg4 out.mp4
```

The simulated video for the same will looks as follows.

<iframe width="560" height="315" src="https://www.youtube.com/embed/1eQlZbSk748" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In the next one we will make more deductions from this and take a look at the mathematics behind it to make a prediction without running simulation.