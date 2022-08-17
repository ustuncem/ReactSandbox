import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

export const RQSuperHeroesPage = () => {
  const [interval, setInterval] = useState(3000);
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    ["deneme"],
    () => axios.get("http://localhost:4000/superheroes"),
    {
      refetchInterval: interval,
      onError,
      onSuccess,
    }
  );

  function onSuccess(data) {
    setInterval((prev) => (data.data.length === 4 ? false : prev));
  }

  function onError(error) {}

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Click me to fetch!</button>
      {data ? (
        data?.data.map((hero) => <p key={hero.name}>{hero.name}</p>)
      ) : isError ? (
        <span>Error: {error.message}</span>
      ) : isLoading && !isFetching ? (
        <span>Not ready ...</span>
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
};
