import { Add_TO_CART, Remove_TO_CART, Empty_TO_CART } from './constant'

export const cartData = (data = [], action) => {

    switch (action.type) {
        case Add_TO_CART:
            console.warn("Add_TO_CART Condition", action)
            return [action.data, ...data];

        case Remove_TO_CART:
            console.warn("Remove_TO_CART Condition", action)
              data.length = data.length? data.length - 1:[]
            const remianingItem=data.filter((item)=>item.id!== action.data);
            console.warn("remainingItem", remianingItem)
            return [...remianingItem];

        case Empty_TO_CART:
            console.warn("Empty_TO_CART Condition", action)
            data = []
            return [...data];

        default:

            return data;
    }
}