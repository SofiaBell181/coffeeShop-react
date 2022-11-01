import { getSelectedCategory, selectGoods } from "../store/goodsSlice";
import { useSelector } from "react-redux";
import Coffee from "./Coffee";



export default function AllCoffee() {

    const selectedCategory = useSelector(getSelectedCategory);
    const goods = useSelector(selectGoods);
 

    return(
        <>
            <div className="cards">
                {goods
                .filter(item => {
                    if (selectedCategory === 'все') return true;
                    return selectedCategory === item.category;
                })
                .map((item, index) => 
                    <Coffee item={item} key={item.id}/>
                 )}
                 
            </div>                   
           
        </>

    )
}