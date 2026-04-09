---
title: "Visualizing the Loss Landscape of Neural Nets"
summary: "Notes from the NeurIPS 2018 paper on why certain models train more easily and generalize better, through loss landscape visualization."
pubDate: 2020-05-06
author: "Shaojie Jiang"
category: "Paper Notes"
tags: ["Deep Learning"]
image: "https://shaojiejiang.github.io/post/visualizing-loss/featured.png"
---

Notes from the NeurIPS 2018 paper on visualizing neural network loss landscapes. The work addresses why certain models train more easily and generalize better than others.

## Visualization Method

The traditional approach uses 2D contour plots centered at a converged model parameter point, plotting loss across two random direction vectors. However, this fails to capture intrinsic loss surface geometry because of scale invariance in network weights.

## Key Innovation

The authors normalize direction vectors filter-wise, ensuring each filter matches the norm of corresponding parameters. This reveals that "sharp minima correlate with poor generalization, while flat minima correspond to better performance."

## Important Findings

- Small-batch training produces flat minima; large-batch training creates sharp minima
- Network width prevents chaotic behavior
- Skip connections substantially widen minimizers
- Flat minima relate to large-margin classifiers, improving robustness to data distribution shifts

## Dimensionality Reduction Caution

While non-convexity in reduced plots indicates high-dimensional non-convexity, apparent convexity doesn't guarantee true convexity — only that positive curvatures dominate.

## Further Questions

1. Application to NLP models?
2. Relevance to NLG metrics beyond loss?
3. Typical convolution filter sizes?
4. RNN-skip connection parallels?
5. Integration with neural architecture search?
