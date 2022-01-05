const BtnReturn = () => {
    const txt = "<";
    return (
        <div className='btn-return'>
            <button onClick={() => {
                console.log(window.location)
                window.location.href = window.location.origin;
            }}>{txt}</button>
        </div>
    )
}

export default BtnReturn
