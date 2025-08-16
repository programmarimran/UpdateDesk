import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.jpg";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { playwrite } from "@/app/layout";
import { pinyon } from "@/lib/utils";
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2  items-center justify-center  p-4 bg-gray-100 border border-blue-200 rounded-lg shadow-sm">
      <div className="flex-1 w-full ">
        <Image
          src={banner} 
          placeholder="blur"
          width={1800}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="flex-1 ml-4 w-full flex-col space-y-6 items-start justify-start  h-full">
        <Badge className="mb-2">Latest News</Badge>
        <h1 className={`text-2xl font-bold ${playwrite.className}`}>
          AI Adoption Accelerates Across Fortune 500 Companies
        </h1>
        <h1 className=" text-white bg-primary">this is my future plan  is my future plan is my future plan is my future plan </h1>
        <p className={`${pinyon.className} text-gray-600`}>
          A new survey reveals that 85% of Fortune 500 companies have
          implemented AI solutions in at least one business function, marking a
          significant increase from previous years. The trend shows no signs of
          slowing down.
          <br /><br />
          A new survey reveals that 85% of Fortune 500 companies have
          implemented AI solutions in at least one business function, marking a
          significant increase from previous years. The trend shows no signs of
          slowing down.
          A new survey reveals that 85% of Fortune 500 companies have
          implemented AI solutions in at least one business function.
        </p>
        <Button className="mt-4 w-full" variant="default">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default Banner;
