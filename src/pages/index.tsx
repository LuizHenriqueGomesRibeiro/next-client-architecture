import { server } from "@/services/api";
import { useEffect } from "react";

import axios from "axios"

export default function Home() {
  useEffect(() => {
    const fetch = async () => {
      const response2 = await server.breed_hound_images('');
      console.log('brandom', response2);
    }

    fetch();
  }, []);

return <>
    hello home
  </>
}