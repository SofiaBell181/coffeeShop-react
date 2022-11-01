import photo1 from '../assets/images/about1.jpg';
import '../assets/css/About.css';
import aboutData from '../about.json';


export default function About() {


    const data = aboutData;
    data.map(item => console.log(item.title))
    
    return(
        <>
           <div className='container'>
            <div className='about-header'>
                    <h2>О компании</h2>
            </div>

            <div className='about__block1'>
                    <div className='block1-l'>
                        <p>ОБЖАРИВАЕМ КОФЕ С 2003 ГОДА</p>
                        <img src={photo1} width="640" alt="coffee" />
                    </div>

                    <div className='block1-r'>
                        <p>находим интересные сорта <br /> и обжариваем ежедневно под каждый <br />  заказ</p>
                    </div>
            </div>


            {data.map((item, index) => 

                <div className='card-about'  key={index}  >
                    <div className={index%2===0 ? 'one' : 'two'}>
                        <img src= {require(`../assets/images/${item.image}`)} width="540" alt="coffee" />
                    </div>

                    <div className='card-about__discription'>
                        <p>{item.title}</p>
                        <p>{item.discription}</p>
                    </div>
                </div>
            )}
          

           </div>
        </>
    )
}