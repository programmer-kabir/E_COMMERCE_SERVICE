import React from "react";
import { useQuery } from "@tanstack/react-query";

const useDatas = () => {
  const {
    refetch,
    data: datas = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["datas"],
    queryFn: async () => {
      const res = await fetch("./datas.json");
      return res.json();
    },
  });
  return [datas, refetch, loading];
};

export default useDatas;