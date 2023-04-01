// object
const obj:{name:string,age?:number,address?:string}={
    name:"Than",
    age:20,
}

// Interface
interface Book {
    authors: {id: number, name: string, slug:string}[],
    book_cover: string,
    categories: {id: number, name: string, is_leaf: boolean},
    current_seller: Seller
}

interface Seller {
    id: number,
    sku: string,
    name: string,
    link: string,
    logo: string,
    price: number,
    product_id: string,
    store_id: number,
    is_best_store: boolean,
    is_offline_installment_supported?: string
}
type outhers ={
    list_price:number,
    name:string,
    original_price:number,
    quantity_sold:quantity,
}
type quantity={
    text:string,
    value:number,
}


type avr={
    rating_average:number,
    short_description:string,
    specifications:spec[],
    id:number

}
type spec={
    name:string,
    attributes:attr[]
}
type attr={
    code:string,
    name:string,
    value:string
}