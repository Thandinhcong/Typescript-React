import { addForm, updateForm } from "../interfaces/Product";
import instance from "./instance";
export const updateProduct = (_id: number | string) => {
    const uri = `/products/${_id}`
    return instance(uri);
}
export const getById = (_id: number | string) => {
    const uri = "/products/" + _id
    return instance.get(uri)
}
export const update = (_id: string, body: updateForm) => {
    let user = JSON.parse(localStorage.getItem("user") as string);
    let token = user.accessToken;
    const uri = "/products/" + _id
    return instance.put(uri, body, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    })
}
export const addProduct = (product: addForm) => {
    let user = JSON.parse(localStorage.getItem("user") as string);
    let token = user.accessToken;
    console.log("token", token);

    const uri = "/products/"
    return instance.post(uri, product, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    })
}