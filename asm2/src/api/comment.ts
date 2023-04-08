import { commentForm } from "../interfaces/comment";
import instance from "./instance";

export const ListComment = () => {
    const uri = "/comments";
    return instance.get(uri)
}