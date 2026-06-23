---
title: "Getting Started in the Lab"
summary: "Foundational materials for new lab members covering AI, PyTorch, and Federated Learning."
icon: "🚀"
order: 1
---

We are always excited to welcome dedicated students to the FL Research Lab. Because our work involves complex, distributed systems, new researchers need a solid baseline of knowledge before diving into active projects.

If you are interested in joining, please complete the following introductory materials. These resources will give you the foundational vocabulary and technical skills needed to meaningfully contribute to our meetings and research.

## Phase 1: General AI and Machine Learning

Before doing Federated Learning, you must understand standard, centralized Machine Learning. You do not need to be an expert, but you must conceptually grasp gradients, model updates, and heterogeneous data.

### Neural Networks Core Concepts

Watch the [3Blue1Brown Neural Network YouTube playlist](https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi). It provides the best visual intuition for how models learn.

### Practical Introduction

Check out [Fast.ai's "Practical Deep Learning for Coders"](https://course.fast.ai/) to see how models are trained in practice.

---

## Phase 2: PyTorch Proficiency

Our lab builds experiments using PyTorch. You must be comfortable defining models and training loops.

### PyTorch 60-Minute Blitz

Complete the [official PyTorch introductory tutorial](https://docs.pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html). Ensure you understand how tensors work and how backpropagation is applied.

### Baseline Task

Build a simple Convolutional Neural Network (CNN) in a Google Colab notebook to classify the CIFAR-10 dataset. You should be able to explain your code line-by-line.

---

## Phase 3: Federated Learning

Once you understand centralized training, you are ready to learn how we train models across decentralized edge devices.

### 1. The Concept

Read the [Wikipedia page on Federated Learning](https://en.wikipedia.org/wiki/Federated_learning) to understand the motivation, privacy benefits, and the difference between centralized and decentralized training.

### 2. The Practice

Follow the tutorial from the [Flower documentation](https://flower.ai/docs/framework/tutorial-series-what-is-federated-learning.html) to see how client-server weight updates work in code.

### 3. The Theory

Read the original paper: ["Communication-Efficient Learning of Deep Networks from Decentralized Data"](https://arxiv.org/pdf/1602.05629) (McMahan et al., 2017). Focus on understanding the FedAvg algorithm.
