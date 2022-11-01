import { useDispatch } from "react-redux";
import { deleteCart } from "../store/cartSlice";

export default function CartList({cart}) {

    let cartItem = cart;
    const dispatch = useDispatch();



    return(
        <>
            <div className="cartItem">
                <img src={require(`../assets/images/${cartItem.image}`)} alt={cartItem.name} />
                    
                    <div className="cart-content">
                       <div>
                            <p className="cart-name">{cartItem.name}</p>
                            <p className="cart-price">{cartItem.totalPrice} ₽</p>
                            <p className="cart-weight">{cartItem.count}*{cartItem.weight}</p>
                       </div>

                       <div>
                            <button onClick={() => {dispatch(deleteCart({cartItem}))}} className="btn-delete"></button>
                       </div>
                    </div>
            </div>
        </>
    )
}