import { client, server } from "@/services/api";
import { useEffect } from "react";

export const getServerSideProps = async () => {
  return {
    props: {

    },
  }
}

export default function Home() {
  const { data, makeRequest, isSuccess, isLoading } = client.breeds_image_random();
  console.log(data, isSuccess, isLoading);

  return <>
    <button className="bg-red-400 rounded-2xl px-2 py-1 cursor-pointer" onClick={makeRequest}>Nova requisição</button>
  </>
}