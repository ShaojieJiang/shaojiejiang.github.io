import { getCollection, type CollectionEntry } from 'astro:content';

export type PostCollection = 'blog';
export type PostEntry<T extends PostCollection = PostCollection> = CollectionEntry<T>;

const NON_TEASER_IMAGES = new Set([
  'https://shaojiejiang.github.io/media/icon_huf1850796dc0c27e76df1b37fe2f35b33_25680_512x512_fill_lanczos_center_3.png',
]);

export async function getPublishedPosts<T extends PostCollection>(collection: T) {
  const posts = await getCollection(collection, ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getPostTeaserImage(image?: string) {
  if (!image) {
    return undefined;
  }

  return NON_TEASER_IMAGES.has(image) ? undefined : image;
}

export async function getPostStaticPaths<T extends PostCollection>(collection: T) {
  const posts = await getPublishedPosts(collection);
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}
