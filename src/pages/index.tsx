import { client, server } from "@/services/api";
import { useEffect } from "react";

export const getServerSideProps = async () => {
  return {
    props: {

    },
  }
}

export default function Home() {
  const { data, makeRequest, isSuccess, isLoading } = client.breeds_list_all();
  
  
  
  useEffect(() => {
    const fetch = async () => {
      const response = await server.breeds_list_all();
      console.log('response: ', response);

    }

    fetch();
  }, []);

  return <>
    <button className="bg-red-400 rounded-2xl px-2 py-1 cursor-pointer" onClick={makeRequest}>Nova requisição</button>
  </>
}