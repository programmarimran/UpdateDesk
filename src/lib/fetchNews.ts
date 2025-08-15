import { NewsItem } from "@/types/news";
import { promises } from "dns";

const fetchNews = async (
  category: string = "",
  search: string = ""
): Promise<NewsItem[]> => {
  try {
    const data = await fetch(
      `https://news-portal-server-flame.vercel.app/api/news?category=${category==="default"||category==="all"?"":category}&search=${search}`
      // `http://localhost:5000/api/news?category=${category==="default"||category==="all"?"":category}&search=${search}`
    );
    const newses = await data.json();
    return newses;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export default fetchNews;
