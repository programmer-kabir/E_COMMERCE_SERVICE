// District.js
import { useQuery } from "@tanstack/react-query";
import React from "react";

const upZillah = () => {
  const {
    refetch,
    data: upZillahs = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["upZillahs"],
    queryFn: async () => {
      const res = await fetch(
        "https://shoe-e-emmerce-server.vercel.app/upZillahs"
      );
      return res.json();
    },
  });

  return [upZillahs, refetch, loading];
};

export default upZillah;
