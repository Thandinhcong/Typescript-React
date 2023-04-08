import * as yup from "yup";
export interface IComment {
    _id?: number | string,
    description: string,
    userId?: string | number,
    productId?: string | number,
}
const schemaComment = yup.object({
    description: yup.string().min(10, "Tối thiểu 10 kí tự")
})
export type commentForm = yup.InferType<typeof schemaComment>