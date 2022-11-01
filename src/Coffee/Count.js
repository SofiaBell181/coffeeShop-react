
export default function Count( {count, setCount, id}) {

    const increase = () => {
        const newQuantity = count + 1;
        setCount(newQuantity);

    }
 


    const decrease = () => {
        if(count <= 1) return
            const decreaseCount = count - 1;
            setCount(decreaseCount)
    }

    return(
        <>
            <div className='count'>
                <button onClick={decrease} className='count_min'>-</button>
                <p>{count}</p>
                <button onClick={increase} className='count_plus' data-key={id}>+</button>
            </div>

        </>
    )
}