// District.js
import { useQuery } from "@tanstack/react-query";
import React from "react";

const District = () => {
  // console.log(District.json);
  const {
    refetch,
    data: districts = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["districts"],
    queryFn: async () => {
      // const res = await fetch("http://localhost:5000/district");
      const res = await fetch("https://shoe-e-emmerce-server.vercel.app/district");
      return res.json();
    },
  });

  return [districts, refetch, loading];
};

export default District;