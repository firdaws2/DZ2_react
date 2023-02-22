import { useState } from "react"


export default function Modal(){
    const [modal, setModal] = useState(false)


const handleClick = () => {
    setModal(true)
}

const handleDelete = () => {
    setModal(false)
}

    return(
        <div className="block">
            <button onClick={handleClick} className='btn'>click</button>
            {modal ? <h2>Travis Scott</h2> : <p>pusto...</p>}
            <button onClick={handleDelete} className='btn'>delete</button>
        </div>
    )
}