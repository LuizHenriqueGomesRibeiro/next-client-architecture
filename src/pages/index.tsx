import { clientNextClientArchitecture } from "@/services/api";

export const getServerSideProps = async () => {
  return {
    props: {

    },
  }
}

export default function Home() {
  const response = clientNextClientArchitecture.requestc();
  console.log(response.data);
  return <>
    hello
    <button onClick={() => response.makeRequest()} >request</button>
  </>
}