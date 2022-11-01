import Count from "./Count";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCart, addToCart, changeCount } from "../store/cartSlice";

export default function Coffee({item}) {

    const [count, setCount] = useState(item.count);

    const getCartItem = useSelector(selectCart);
    const dispatch = useDispatch();
    const itemInCart = getCartItem.some(elem => elem.id === item.id)

    const clickHandler = (event) => {
        event.preventDefault();
        if(!itemInCart) dispatch(addToCart({item, count}));
        else dispatch(changeCount({item, count}));
    }

    
    return(
        <>
            <div className="card" key={item.id}>
                <h2 >{item.name}</h2>
                <img className="image-coffee" src={require(`../assets/images/${item.image}`)} alt={item.name} />
                <p className="par-discription">{item.discription}</p>

                <div className="cardBox">
                    <div className="cardBox-l">
                        <p className="weight">{item.weight}</p>
                        <p className="price">{item.price} ₽</p>
                    </div>

                    <div className="cardBox-r">
                        <Count  count={count} setCount={setCount} id={item.id}/>
                        
                        <button onClick={clickHandler} type="submit" id="btnAdd" className="btn-buy">В корзину</button>
                    </div>
                </div>
            </div>
        </>
    )
}