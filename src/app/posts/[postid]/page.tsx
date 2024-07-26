import PostScreen from "./screens/post";
import { Header } from "@/app/global.imports";


export default function Post() {
    return (
        <>
            <main className="relative top-0 w-screen flex flex-col pt-7-25 justify-center items-center overflow-x-hidden">
                <Header />
                <PostScreen />
            </main>
        </>
    )
}

//export default Post;