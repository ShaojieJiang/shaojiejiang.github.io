---
title: "One Source of LLM Hallucination Is Exposure Bias"
summary: "Discussing how LLM hallucinations stem from exposure bias — both memorized knowledge and corpus-based heuristics from training data."
pubDate: 2023-08-09
author: "Shaojie Jiang"
category: "AI"
tags: ["Deep Learning", "NLP", "LLM", "Hallucination", "Information Retrieval"]
image: "https://shaojiejiang.github.io/post/llm-hallucination/featured.png"
---

A recent paper titled "Sources of Hallucination by Large Language Models on Inference Tasks" by McKenna et al. identifies that large language models hallucinate content due to two primary factors:

- Knowledge memorized during pre-training
- Corpus-based heuristics like term frequency

I consolidate these into a single concept: **exposure bias**. Both memorized knowledge and frequent terms stem from what the model encountered during training. This connects to my earlier work examining how generative chatbots produce low-diversity responses due to frequent terms in training data.

## LLMs as Statistical Models

LLMs are sophisticated statistical models rather than reasoning systems. Their generation process is essentially "information retrieval but using the neural network weights and in the granularity of tokens."

While retrieval-augmentation could serve as a safeguard, it won't completely eliminate hallucinations.

## Can We Fix It?

Hallucination cannot be entirely resolved, but improvements are possible through alternative training approaches. It's worth noting that McKenna's analysis focused on natural language inference (NLI) rather than natural language generation (NLG), where hallucination problems are more pronounced.

The key takeaway: understanding the root cause — exposure bias — is the first step toward building more reliable language models.
