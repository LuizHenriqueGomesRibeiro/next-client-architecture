import { client, server } from "@/services/api";

export const getServerSideProps = async () => {
    const response = await server.breed_hound_images();
    return {
        props: {
            listByBreed: response.message
        },
    }
}

interface PageProps {
    listByBreed: string[]
}

const Index = ({ listByBreed }: PageProps) => {
    const { makeRequest, data, isSuccess } = client.breeds_image_random();

    return <div>
        <div>
            {isSuccess && <img src={data.message} alt="" />}
            <button onClick={() => makeRequest()} >New request</button>
        </div>
        <div className="h-50 overflow-y-scroll">
            {listByBreed.map(breed => <div>{breed}</div>)}
        </div>
    </div>
}

export default Index;