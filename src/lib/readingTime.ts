type ReadingTimeEstimate = {
  minutes: number;
  words: number;
  text: string;
};

const countWords = (markdown: string) => {
  const withoutCodeBlocks = markdown.replace(/```[\s\S]*?```/g, " ");
  const withoutInlineCode = withoutCodeBlocks.replace(/`[^`]*`/g, " ");
  const withoutImages = withoutInlineCode.replace(/!\[[^\]]*]\([^)]*\)/g, " ");
  const linksAsText = withoutImages.replace(/\[([^\]]+)]\([^)]*\)/g, "$1");
  const withoutHtml = linksAsText.replace(/<[^>]+>/g, " ");
  const normalized = withoutHtml.replace(/[^\p{L}\p{N}]+/gu, " ").trim();

  if (!normalized) {
    return 0;
  }

  return normalized.split(/\s+/).filter(Boolean).length;
};

export function estimateReadingTime(markdown: string, wordsPerMinute = 200): ReadingTimeEstimate {
  const words = countWords(markdown);
  const isUnderOneMinute = words > 0 && words < wordsPerMinute;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));

  return {
    minutes,
    words,
    text: isUnderOneMinute ? "< 1 min read" : `${minutes} min read`,
  };
}
