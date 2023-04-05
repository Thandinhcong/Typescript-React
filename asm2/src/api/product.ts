import instance from "./instance";
export const updateProduct = (_id: number | string) => {
    const uri = `/products/${_id}`
    return instance(uri);
}
export const getById = (_id: number | string) => {
    const uri = "/products/" + _id
    return instance.get(uri)
}