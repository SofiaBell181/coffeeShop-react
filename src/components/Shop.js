import coffee from '../assets/images/cup-of-coffee.png';
import AllCategories from '../Filter/AllCategories';
import AllCoffee from '../Coffee/AllCoffee';
import '../assets/css/Shop.css';


export default function Shop() {
    return(
        <>

            <div className="container main-bg">
                <div className='main-header'>
                    <h1>КАЖДЫЙ ДЕНЬ МЫ ОБЖАРИВАЕМ КОФЕ</h1>
                    <button className='btn-shop'>Выбрать</button>
                </div>
                <img src={coffee} alt="coffee" />
            </div>

            <AllCategories/>

            <AllCoffee />
     
        </>
    )
}