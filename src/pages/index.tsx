import axios from "axios"
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('https://dog.ceo/api/breed/hound/list');
      console.log(response.data);
    }

    fetch();
  }, []);
  return <>
    hello home
  </>
}
