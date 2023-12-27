import {FC} from "react"
import {userName} from "../hooks/useAuth.ts";

const Home: FC = () => {
    const name = userName()
    return (
        <h1 className="text-xl mb-4">
            Hi {name ? name : "Guest"}
        </h1>
    )
}

export default Home