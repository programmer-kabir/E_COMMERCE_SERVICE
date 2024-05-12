import React from "react";
import { useQuery } from "@tanstack/react-query";

const Division = () => {
  const {
    refetch,
    data: divisions = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["divisions"],
    queryFn: async () => {
      const res = await fetch("https://shoe-e-emmerce-server.vercel.app/divisions");
      return res.json();
    },
  });
  return [divisions, refetch, loading];
};

export default Division;