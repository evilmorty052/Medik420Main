import { useState } from "react";
import { client , urlFor } from "../../lib/client";
import { useQuery } from "@tanstack/react-query";

export default function useFetch(query,id) {
    const { data: user } = useQuery([`${id}`], () => client.fetch(query))
    

    try {
        return(
           [...user] 
        )
    } catch (e) {
        console.log('error')
    }
}
