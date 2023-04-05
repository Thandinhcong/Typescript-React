import * as yup from "yup";
export interface Iproduct {
    _id?: string | number,
    price: number,
    original_price: number,
    name: string,
    description: string,
    category: string,
}
export const updateSchema = yup.object({
    name: yup.string().required("Trường dữ liệu bắt buộc"),
    price: yup.number().required("Trường dữ liệu bắt buộc"),
    original_price: yup.number().required("Trường dữ liệu bắt buộc"),
    description: yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),
})

export type updateForm = yup.InferType<typeof updateSchema>