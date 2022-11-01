import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../store/goodsSlice";

function Filter({category}) {

    const selectedCategory = useSelector(getSelectedCategory)

    const dispatch = useDispatch();
 
    return(
        <>
            <div className="filterBtn-block">
                <button onClick={() => {dispatch(filterCategory(category))}}
                className={selectedCategory === category ? 'filterBtnSelected' : 'filterBtn'}
                >{category}</button>
            </div>
 
        </>
    )
}

export default Filter