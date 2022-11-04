import { useSelector } from "react-redux";
import { selectCart } from "../store/cartSlice";
import '../assets/css/Cart.css';
import CartList from './CartList';

export default function Cart() {

    const selectedCart = useSelector(selectCart);
    // console.log(selectedCart);
    let total = selectedCart.reduce((accum, item) =>{
        return item.totalPrice + accum;
     }, 0)


    return(
        <>
            <div>
                <h3>Товары в корзине</h3>
                {selectedCart.map((item, index) => <CartList key={index} cart={item} />)}
                <h4>Всего: {total + ' ₽'} </h4>
            </div>
        </>
    )
}