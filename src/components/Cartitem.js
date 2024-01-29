import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { cartData } from '../redux/reducer';

function Cartitem() {
    const _cartData = useSelector((state) => state.cartData)
    let amount = _cartData.length && _cartData.map(item => item.price).reduce((prev, next) => prev + next)
    console.warn('======amount', amount, _cartData)
    return (
        <div>
            <Link to='/'>Go to Product Link </Link>
            <h1>Cart Page</h1>
            <div className='cart-page-container'>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>Color</td>
                        <td>Price</td>
                        <td>Brand</td>
                        <td>Category</td>
                    </tr>
                    {
                        _cartData.map((item) => <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.color}</td>
                            <td>{item.price}</td>
                            <td>{item.brand}</td>
                            <td>{item.category}</td>

                        </tr>)
                    }
                </table>

                <div className='price-details'>
                    <div className="adjust-price"><span>Amount</span><span>{amount}</span></div>
                    <div className="adjust-price"><span>Discount</span><span>{amount / 10}</span></div>
                    <div className="adjust-price"><span>Tax</span><span>0000</span></div>
                    <div className="adjust-price"><span>Total</span><span>{amount - (amount / 10)}</span></div>

                </div>

            </div>
            </div>


            );
}

            export default Cartitem;
