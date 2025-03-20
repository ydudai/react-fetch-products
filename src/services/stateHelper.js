export function convertToArray(object) {
    if (Array.isArray(object)) { 
        console.log(object)
        return object
    } 
    else if (typeof object == "object") {
        console.log(object)
        return object.products
    } else {
        throw new Error("undefined object type")
    }
}