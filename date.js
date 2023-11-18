const getDate = () => {
    const options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    } 
    return new Date().toLocaleDateString("en-Us", options) ;
}

const getDay = () => {
    const options = {
        weekday : "long"
    } 
    return new Date().toLocaleDateString("en-Us", options) ;   
}

export default{
    getDate,
    getDay
};