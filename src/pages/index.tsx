import { client, server } from "@/services/api";

export const getServerSideProps = async () => {
  return {
    props: {

    },
  }
}

export default function Home() {
  const { makeRequest, data } = client.breeds_image_random();
  
  return <>
    <button className="bg-red-400 rounded-2xl px-2 py-1 cursor-pointer" onClick={() => makeRequest()}>Nova requisição</button>
  </>
}