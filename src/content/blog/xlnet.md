---
title: "What's New in XLNet?"
summary: "Examining how XLNet improved upon BERT's architecture with Two-Stream Self-Attention and bidirectional data input."
pubDate: 2019-06-20
updatedDate: 2019-07-03
author: "Shaojie Jiang"
category: "Paper Notes"
tags: ["NLP", "Deep Learning", "BERT", "Transformer", "XLNet"]
image: "https://shaojiejiang.github.io/post/xlnet/featured.jpg"
---

Let me break down what makes XLNet different from BERT.

**Main Formula:** XLNet = BERT + TSSA + bidirectional data input

## Two-Stream Self-Attention (TSSA)

TSSA addresses BERT's limitation with masked language modeling. When BERT masks tokens, it cannot learn dependencies between masked words. TSSA solves this through:

- **Query stream:** Provides attention query vectors without leaking information about the target word being predicted
- **Content stream:** Supplies key/value vectors using randomly permuted token order, similar to Transformer decoder masking

## Additional Innovations

- Masking consecutive word spans rather than random individual words
- Using bidirectional data input to determine "future" direction
- Implementing relative positional encoding and segment recurrence

## Closing Observation

One question remains: do the architectural improvements alone account for XLNet's performance gains, or does additional training data (Giga5, ClueWeb, Common Crawl) significantly contribute?

BERT remains viable; XLNet simply represents architectural evolution rather than obsolescence.
