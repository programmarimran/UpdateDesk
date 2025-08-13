import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
interface CategoryFilterProps {
  onCategoryFilter: (filter: string) => void;
}
const CategoryFilter = ({ onCategoryFilter }: CategoryFilterProps) => {
  const category = ["all", "health", "sports", "business","general"];
  return (
    <div className=" flex items-center gap-4">
      <h1 className=" flex-shrink-0">Filter by Category</h1>
      <Select onValueChange={(value) => onCategoryFilter(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent className=" capitalize">
          {category.map((item: string, index) => {
            return (
              <SelectItem key={index} value={item} className=" capitalize">
                {item}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
