

export interface NewsItem{
    _id: string;
    title: string;
    description: string;
    snippet: string;
    url: string;
    imageUrl: string;
    language: string;
    published_at: string;
    source: string;
    relevance_score: number | null;
    categories: string[];
}