import { IFetch } from "../types/fetch";
import axios from 'axios';

const API: string = "http://localhost:3005";

const fetchData = ( props: IFetch ): Promise<any> => {
    return axios( {
        url: `${API}${props.url}`,
        method: props?.params?.method || "GET",
        data: JSON.stringify( props?.params?.body ),
        headers: {
            "Content-type": "application/json",
            ... props?.params?.headers
        }
    } );
}

export default fetchData;
