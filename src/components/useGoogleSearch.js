import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = 'a063f0517222841c1'

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null) 

    // custom hook
    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
                // cx context, q query
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }
        fetchData()
    }, [term])
    // data layer variable
    return { data }
}

export default useGoogleSearch