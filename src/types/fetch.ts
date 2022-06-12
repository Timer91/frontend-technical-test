export interface IFetch {
    url: string,
    params? : {
        method?: string,
        headers?: object,
        body?: object
    }
};
