---
title: "Compressive Transformers"
summary: "Notes on Compressive Transformers — a model that condenses old memories and stores them in compressed memory buffers for long-range sequence learning."
pubDate: 2020-05-12
author: "Shaojie Jiang"
category: "Paper Notes"
tags: ["Deep Learning", "NLP"]
image: "/post/compressive-transformers/featured.png"
---

Notes on the paper: [Compressive Transformers for Long-Range Sequence Modelling](https://arxiv.org/abs/1911.05507).

The Compressive Transformer "condenses old memories (hidden states) and stores them in the compressed memory buffer, before completely discarding them." It suits long-range sequence learning but may be computationally expensive for shorter sequences.

## Background

The concept connects to human cognition: humans use lossy compression when memorizing. Three approaches compared:

- **RNNs:** Compress memories into fixed-size vectors (space-efficient but hard to parallelize)
- **Transformers:** Store all past memories uncompressed (better performance but increasing computational/memory costs)
- **Sparse attention:** Reduces computation while maintaining spatial costs

## Model Design and Training

The Compressive Transformer uses attention mechanisms over both memories and compressed memories. Training employs local auxiliary losses to avoid long backpropagation-through-time, with a clever approach: rather than reconstructing original memory vectors, the model reconstructs attention vectors instead.

## Practical Concerns

1. Auxiliary loss trains only the compression module to prevent harming the main network
2. Batch accumulation (4x larger batches) improves performance
3. Gradient norms clipped to 0.1 for stability
4. Convolution works best for memory compression

## Further Questions

Two open questions: why do Compressive Transformers improve rare word modeling, and could we explore adaptive compression rates or using RNNs as compressors?
