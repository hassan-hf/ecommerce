import {Set_PRODUCT_LIST } from './constant'

export const productData = (data = [], action) => {

    switch (action.type) {
        case Set_PRODUCT_LIST:
            console.warn("Set_PRODUCT_LIST COndition", action)
            return [...action.data];

        default:

            return data
    }
}