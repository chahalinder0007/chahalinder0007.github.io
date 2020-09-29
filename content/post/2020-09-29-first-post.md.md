---
title       : "Recommender System made easier with TFRS"
date        : 2020-09-29T11:00:01+05:30
description : "Implementation of recommender sysmtems made easier with google's tensorlfow Recommenders"
feature_image: "/images/blog/TFRS/main_image.jpg"

author: Inderjit Singh Chahal
tags: [Recommendation systems, Deep Learning,Tensorflow,keras]
---

Creating scalable deep learning-based recommendation systems from scratch is a significantly time-consuming task, especially so that we need to spend significant time on the non-productive elements involved in setting up the model for experiments. It is a given that we will need to perform levels of iterations on the model architecture to get optimal hyperparameters for a particular use case. 

Google has now launched just the instrument required to reduce the non-productive component in that cycle. The new [tensorflow recommenders](https://www.tensorflow.org/recommenders) aim at having a gentle learning curve while keeping the flexibility to design more complex implementations constant. 



### Short Overview of TFRS(Tensorflow Recommenders)

The TFRS gives users the ability to be able to do the following implementations:

- Create and benchmark dynamic implementations for flexible candidate nomination models

- Inbuilt user, item, and cotextual information for use in the recommendation model

- Efficient use for tensorflow backend and support for the latest versions

- Multi-task implementation that can be used to control and train multiple recommendation model with a joint objective


![recomendor visual](/images/blog/TFRS/tf_visual.gif)



The older implementation of collaborative filtering etc are either augmented with deep learning solution or have ceased to exist in real world implementation this neccessatised building solutions from scratch to mathc the existing industry benchmark. The deficiecny of the open source tools made it a difficult affair to implement different variants of these models to create an optimal solution, TFRS release as an [open source](https://github.com/tensorflow/recommenders) tool will enable users to quickly expand on their research and build models that are capable of matching up to the existing benchmarks. 


**It is a true step towards democratisation of the field of Articial intelligence.**


A simple code snippet to make a minimalistic example

```
import tensorflow_datasets as tfds
import tensorflow_recommenders as tfrs

# Load data on movie ratings.
ratings = tfds.load("movie_lens/100k-ratings", split="train")
movies = tfds.load("movie_lens/100k-movies", split="train")

# Build flexible representation models.
user_model = tf.keras.Sequential([...])
movie_model = tf.keras.Sequential([...])

# Define your objectives.
task = tfrs.tasks.Retrieval(metrics=tfrs.metrics.FactorizedTopK(
    movies.batch(128).map(movie_model)
  )
)

# Create a retrieval model.
model = MovielensModel(user_model, movie_model, task)
model.compile(optimizer=tf.keras.optimizers.Adagrad(0.5))

# Train.
model.fit(ratings.batch(4096), epochs=3)

# Set up retrieval using trained representations.
index = tfrs.layers.ann.BruteForce(model.user_model)
index.index(movies.batch(100).map(model.movie_model), movies)

# Get recommendations.
_, titles = index(np.array(["42"]))
print(f"Recommendations for user 42: {titles[0, :3]}")
```