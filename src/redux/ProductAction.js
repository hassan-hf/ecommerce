import {PRODUCT_LIST, Search_PRODUCT} from './constant'


export const productlist = () => {
 
    return {
        type:PRODUCT_LIST,
        data:"apple"
        
    }
}
export const Searchproduct = (query) => {
 
    return {
        type:Search_PRODUCT,
        query,
        
    }
}
