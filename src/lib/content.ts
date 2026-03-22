import { getCollection, type CollectionEntry } from 'astro:content';

export type PostCollection = 'blog';
export type PostEntry<T extends PostCollection = PostCollection> = CollectionEntry<T>;

export async function getPublishedPosts<T extends PostCollection>(collection: T) {
  const posts = await getCollection(collection, ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPostStaticPaths<T extends PostCollection>(collection: T) {
  const posts = await getPublishedPosts(collection);
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}
