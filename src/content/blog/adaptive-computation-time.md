---
title: "Adaptive Computation Time"
summary: "Notes on Adaptive Computation Time for Recurrent Neural Networks — comparing additive vs multiplicative halting probability approaches."
pubDate: 2020-04-28
author: "Shaojie Jiang"
category: "Paper Notes"
tags: ["Deep Learning"]
---

Notes on the paper: [Adaptive Computation Time for Recurrent Neural Networks](https://arxiv.org/abs/1603.08983).

## Additive vs Multiplicative Halting Probability

### Multiplicative Approach

In the paper's footnote, the authors thoroughly examine their choice regarding computation time determination. Using logits as halting probability at each step is more straightforward. The overall halting probability calculates as a product of previous non-halting probabilities.

Since each probability falls between 0 and 1 and their sum isn't constrained to equal 1, this approach doesn't prevent update depth from growing excessively. While models can be trained to minimize expected ponder time, experiments reveal two unfavorable patterns:

1. The first step's halting probability typically sits just below threshold, intermediate values equal zero, and the final step is high enough to halt
2. With low expectation values, the final step's probability is much smaller than the first, yet networks learn substantially higher output state magnitudes at the final step, causing final output domination

### Additive Approach

The additive method constrains probabilities so they sum to 1, ensuring monotonically decreasing probability as updates increase. Though non-differentiable, total ponder time receives penalties preventing unnecessary computation consumption.

One remaining drawback: performance sensitivity to the penalty factor, which lacks intuitive hyperparameter selection guidance.
