import { client, server } from "@/services/api"

export const getServerSideProps = async () => {
  return {
    props: {

    },
  }
}

export default function Home() {
  const response = client.requestc();
  return <>
    hello
    <button onClick={() => response.makeRequest()} >request</button>
  </>
}