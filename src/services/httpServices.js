import axios from "axios"
import { convertToArray } from "./stateHelper"

async function fetch(url) {
    try {
        const result = await axios.get(url)
        return [result.data]
     } catch (error) {
        console.error(error)
    }
}

const httpService = {
    fetch
}

export default httpService