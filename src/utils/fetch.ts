const API: string = "http://localhost:3005";

function newHeaders( obj: Object ): Headers {
    const headers: Headers = new Headers();

    if ( Object.keys( obj ).length ) {
        for ( const [ k, v ] of Object.entries( obj ) ) {
            headers.append( k, v );
        }
    }
    
    return headers;
}

export const myFetch = (
    url: string,
    {
        string: method="GET",
        object: headers={},
        body=null
    } = {}
): Promise<any> => {
    const
        params = {
            method,
            headers: newHeaders( headers ),
            body
        }
    ;
    
    return fetch( `${API}${url}`, params )
        .then( res => {
            if ( !res.ok ) {
                throw new Error( `${res.status}` );
            }
            return res.json()
                .then( data => ( { status: res.status, body: data } ) );
        } )
}
