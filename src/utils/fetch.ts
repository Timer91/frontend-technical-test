import { IFetch } from "../types/fetch";

const API: string = "http://localhost:3005";

const newHeaders = ( obj: Object ): Headers => {
    const headers: Headers = new Headers();

    if ( obj && Object.keys( obj ).length ) {
        for ( const [ key, value ] of Object.entries( obj ) ) {
            headers.append( key, value );
        }
    }
    
    return headers;
}

export const fetchAPI = ( props: IFetch ): Promise<any> => {
    return fetch(
        `${API}${props.url}`,
        {
            method: props?.params?.method || "GET",
            headers: newHeaders( props?.params?.headers ),
            body: JSON.stringify( props?.params?.body )
        }
    )
    .then( res => {
        if ( !res.ok ) {
            throw new Error( `${res.status}` );
        }
        return res.json()
            .then( data => ( { status: res.status, body: data } ) );
    } )
}
