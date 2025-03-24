import { client, server } from "@/services/api";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetch = async () => {
      const response2 = await client.breeds_list_all();
      console.log('brandom', response2.data);
    }

    fetch();
  }, []);

  return <>
    hello home
  </>
}