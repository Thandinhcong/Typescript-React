import { string } from "joi";
import * as yup from "yup";
export interface IComment {
    _id?: number | string,
    description: string,
    userId?: string | number,
    productId?: string | number,
}
export const schemaComment = yup.object({
    description: yup.string().min(5, "Tối thiểu 5 kí tự"),
    userId: yup.string()
})
export type commentForm = yup.InferType<typeof schemaComment>