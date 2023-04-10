import { commentForm } from "../interfaces/comment";
import instance from "./instance";

export const getComment = () => {
    const uri = "/comments";
    return instance.get(uri)
}
export const AddComment = (comment: commentForm) => {
    const uri = "/comments";
    return instance.post(uri, comment)
}
export const DeleteComment = (_id: string | number) => {
    const uri = "/comments" + _id;
    return instance.delete(uri)
}
