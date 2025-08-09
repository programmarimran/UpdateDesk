import Image from "next/image";
import React from "react";
// import newsCard from "@/assets/banner.jpg";
import { Button } from "../ui/button";
import Link from "next/link";
import { NewsItem } from "@/types/news";

interface NewsItemprops {
  news: NewsItem;
}

const NewsCard = ({ news }: NewsItemprops) => {
  return (
    <div>
      <Link href="/news/1" className="block">
        <div className="  hover:scale-105 transition-all duration-300 ">
          <Image
            src={news?.imageUrl}
            // placeholder="blur"
            className="rounded-lg"
            alt="Picture of the News card"
            width={500}
            height={500}
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mt-4">
            {news?.title.substring(0, 40)}...
          </h2>
          <p className="text-gray-600 text-xl mt-2">
            {news?.description.substring(0, 100)}...
          </p>
          <Button variant={"default"} className="mt-3">
            Read More
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
