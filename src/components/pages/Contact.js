import { useState, useEffect } from "react";

function Contact() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000)
    })


    return (
        <div>
            <h1>Contato {count}</h1>
        </div>
    )
}

export default Contact