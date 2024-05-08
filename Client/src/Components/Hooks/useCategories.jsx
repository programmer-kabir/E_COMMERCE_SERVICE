import React from "react";
import { useQuery } from "@tanstack/react-query";

const useCategories = () => {
  const {
    refetch,
    data: categories = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("./category.json");
      return res.json();
    },
  });
  return [categories, refetch, loading];
};

export default useCategories;