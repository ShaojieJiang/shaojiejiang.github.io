---
title: "Transformer Align Model"
summary: "Notes on training transformers to perform both translation and alignment tasks simultaneously."
pubDate: 2020-05-16
author: "Shaojie Jiang"
category: "Paper Notes"
tags: ["Deep Learning", "NLP"]
---

Notes on the paper: [Jointly Learning to Align and Translate with Transformer Models](https://arxiv.org/abs/1909.02074).

## Application Scenarios of Word Alignments in NMT

Word alignments in neural machine translation serve several purposes:
- Creating bilingual lexica from parallel corpora
- Supporting external dictionary-assisted translation for low-frequency words
- Enabling trust, explanation, and error analysis
- Preserving webpage styling during translation

## Model Design

The paper leverages the observation that "attention probabilities from the penultimate layer of a normally trained transformer MT model corresponds to word alignments." Rather than supervising all attention heads, the authors designate a single attention head in the penultimate layer as the alignment head, allowing the model flexibility in choosing whether to prioritize alignment or other attention mechanisms.

## Training the Alignment Head

Two existing approaches use either labeled alignments with KL-divergence training or attentional vectors to predict target words or linguistic properties.

This work employs an unsupervised approach: an alignment model is first trained on translation, then penultimate layer attention weights are averaged and used as weak supervision for a combined translation-alignment model trained bidirectionally.

**Results:** While alignment performance improved, translation results remained moderate compared to previous work reporting gains from alignment supervision.
