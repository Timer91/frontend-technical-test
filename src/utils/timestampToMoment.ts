import moment from "moment";

const timestampToMoment = ( timestamp: number ) => {
    return moment( timestamp ).fromNow();
}

export default timestampToMoment;
