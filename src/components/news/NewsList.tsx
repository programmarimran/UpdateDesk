"use client";
import fetchNews from "@/lib/fetchNews";
import { NewsItem } from "@/types/news";
import React, { use, useEffect, useState } from "react";
import NewsCard from "../shared/NewsCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

const NewsList = () => {
  const [search, setSearch] = useState<string>("");
  const [news, setNews] = useState<NewsItem[]>([]);
  const [category, setCategory] = useState<string>("");
  useEffect(() => {
    async function NewsFetch() {
      const newses = await fetchNews(category, search);
      setNews(newses);
    }
    NewsFetch();
  }, [category,search]);
  console.log(search);
  return (
    <>
      {/* serarch and filter sectin */}
      <div className=" flex flex-col md:flex-row justify-between items-end gap-4 md:gap-12  my-6">
        <SearchBar onSearch={setSearch} />
        <CategoryFilter onCategoryFilter={setCategory} />
      </div>
      {/* newses */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item: NewsItem) => {
          return <NewsCard key={item._id} news={item} />;
        })}
      </div>
    </>
  );
};

export default NewsList;
