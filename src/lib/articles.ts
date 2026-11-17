import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'insights'>;

export async function allArticles(): Promise<Article[]> {
  const list = await getCollection('insights', ({ data }) => import.meta.env.DEV || !data.draft);
  return list.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function articlesById(ids: string[]): Promise<Article[]> {
  const all = await allArticles();
  return ids.map((id) => {
    const a = all.find((x) => x.id === id);
    if (!a) throw new Error(`Unknown article id: ${id}`);
    return a;
  });
}
