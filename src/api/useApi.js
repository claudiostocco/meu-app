import useSWR from "swr";
import api from 'api';

export function useApi(url) {
    const {data,error} = useSWR(url,async url => {
        const response = await api.get(url)
        return response.data
    },{
        errorRetryCount: 2,
        errorRetryInterval: 1,
        shouldRetryOnError: true
    })

    return {data,error}
}