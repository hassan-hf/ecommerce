import {Add_TO_CART,Remove_TO_CART,Empty_TO_CART} from './constant'


export const AddTOCART = (data) => {


    console.warn("action add to cart called",data)
    return {
        type:Add_TO_CART,
        data
    }
}
export const RemoveTOCART = (data) => {


    console.warn("action Remove to cart called",data)
    return {
        type:Remove_TO_CART,
        data
    }
}
export const EmptyTOCART = () => {


    console.warn("action empty to cart called",)
    return {
        type:Empty_TO_CART,
        
    }
}