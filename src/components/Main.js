import { useEffect } from 'react';
import { productlist } from '../redux/ProductAction';
import { AddTOCART, RemoveTOCART, EmptyTOCART } from '../redux/action';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function Main() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productData);
    console.warn("data in main component from saga", data)

    

   useEffect(() => {
   dispatch (productlist())
   }, [])
    return (
        <div>

 
            <div>
                <button onClick={() => dispatch(EmptyTOCART())}>Empty cart</button>
            </div>

            <div className='product-container'>
                {
                    data.map((item) => <div key={item.id} className='product-item'>
                        <img height={'30%'} width={'15%'} src={item.photo} alt="" />
                        <div>Name : {item.name}</div>
                        <div>Color : {item.color}</div>
                        <div>Brand : {item.brand}</div>
                        <div>Price : {item.price}</div>
                        <div>Category : {item.category}</div>
                        <div>photo: {item.photo}</div>
                        <div>
                            <button onClick={() => dispatch(AddTOCART(item))}>Add to Cart</button>
                            <button onClick={() => dispatch(RemoveTOCART(item.id))}>Remove to Cart</button>
                        </div>


                    </div>)
                }
            </div>

        </div>
    );
}

export default Main;
