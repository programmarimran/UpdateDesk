import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import { NewsItem } from "@/types/news";


export default async function Home() {
  const data=await fetch("http://localhost:5000/api/news");
  const newses = await data.json();
  console.log(newses);
  return (

    <>
      <section className="max-w-7xl w-11/12 mx-auto my-12 p-4">
        <Banner />
      </section>
      <section className="max-w-7xl w-11/12 mx-auto my-12 p-4">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          newses.slice(0,3).map((news:NewsItem) => (
            <NewsCard key={news._id} news={news} />
          ))
        }
   
       </div>
      </section>
    </>
  );
}
