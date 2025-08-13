import React from "react";
import { Input } from "../ui/input";
interface SearchBarProps {
  onSearch: (search: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className=" w-full md:w-3/4">
      <h1 className=" text-2xl font-bold">Search News</h1>
      <Input
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search news"
        className=" w-full"
      />
    </div>
  );
};

export default SearchBar;
