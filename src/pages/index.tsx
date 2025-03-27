import { client, server } from "@/services/api";

export const getServerSideProps = async () => {
  return {
    props: {

    },
  }
}

export default function Home() {
  const { makeRequest, data, isLoading, isSuccess} = client.breeds_image_random();

  const status = () => {
    if (isLoading && !isSuccess) return 'Carregando...';
    if (!isLoading && isSuccess) return 'Carregado com sucesso';
    return 'Aguardando requisição';
  }

  return <>
    <button className="bg-red-400 rounded-2xl px-2 py-1 cursor-pointer" onClick={() => makeRequest()}>Nova requisição</button>
    <div>Status da requisição: 
      <span className="font-bold text-5xl">{status()}</span>
    </div>
    {data && <img src={data.message} alt="" />}
  </>
}