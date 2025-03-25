import { client, server } from "@/services/api";
import { useEffect } from "react";

export const getServerSideProps = async () => {
  return {
    props: {

    },
  }
}

export default function Home() {
  const breeds = client.breeds_image_random();
  console.log('breeds: ', breeds.data);

  return <>
    <button className="bg-red-400 rounded-2xl px-2 py-1 cursor-pointer" onClick={breeds.makeRequest}>Nova requisição</button>
  </>
}