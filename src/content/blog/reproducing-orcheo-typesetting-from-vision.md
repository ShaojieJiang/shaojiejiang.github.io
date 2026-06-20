---
title: "Reproducing Orcheo SIGIR Paper's Typesetting from Vision Alone"
summary: "An experiment in asking Codex to recreate the XHTML typesetting of the Orcheo paper from purely visual understanding, without text extraction or OCR."
pubDate: 2026-06-20
author: Shaojie Jiang
category: Engineering
image: "/post/orcheo-paper-xhtml/featured.png"
tags:
  - ai
  - codex
  - xhtml
  - publishing
  - orcheo
---

I was genuinely surprised by this experiment: I used Codex to reproduce the typesetting of our recent [Orcheo SIGIR paper](https://arxiv.org/pdf/2602.14710) as XHTML from visual understanding alone.

__No source text was provided. No OCR was used.__ The model looked at the original PDF file visually and rebuilt the page structure, typography, figures, spacing, and flow into a browser-renderable XHTML version.

That makes the result more interesting to me than a conventional format conversion. It is not just "PDF to HTML." It is closer to asking an AI system to infer a document's design language from pixels, then reconstruct a working representation of that document for the web.

Below is an embedded preview of the XHTML bundle that Codex produced. Click the page numbers to navigate through the pages:

<div style="width: min(100vw - 2rem, 850px); margin-left: 50%; transform: translateX(-50%); border: 1px solid hsl(var(--border)); border-radius: 8px; overflow: hidden; background: #eeeeee; box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);">
  <iframe
    title="Orcheo XHTML paper preview"
    src="/post/orcheo-paper-xhtml/index.xhtml"
    style="display: block; width: 100%; height: 820px; border: 0; background: #eeeeee;"
  ></iframe>
</div>

**Disclaimer.** The XHTML content embedded above was created using GPT-5.5 for research purposes only. It is an experimental reconstruction, not an official or distributable copy of the original Orcheo paper, any conference version, or any ACM proceedings artifact. The reproduced text may contain discrepancies from the original paper because LLMs can hallucinate, omit, or alter content. Please use the [official paper](https://arxiv.org/pdf/2602.14710) for reading, citation, and distribution.

[Open the XHTML index directly](/post/orcheo-paper-xhtml/index.xhtml).

Here is the prompt I used to ask Codex to reproduce the typesetting of the Orcheo paper from vision alone:

```text
Convert 2602.14710v2.pdf into a collection of XHTML files.
Don't use the text layer, nor using OCR. Instead, take a screenshot
of each page, read and understand the image, then recover the text
and the exact typesetting of it in an XHTML file.
```

If AI can recover the typesetting of a complicated research paper from vision alone, what else can it learn to reconstruct?
