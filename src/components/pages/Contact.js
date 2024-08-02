import { useState, useEffect } from "react";

import Container from "../layout/Container";

import styles from './Contact.module.css'

function Contact() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000)
    })

    const [imagens, setImagens] = useState([])

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=10', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        }).then((resp) => resp.json())
            .then((data) => {
                setImagens(data)
            })
            .catch((err) => console.log(err))

    }, [])


    return (
        <div>
            <h1>Contato {count}</h1>
            <div className="{}">
                <div className="{}">
                    <h1>Minhas Imagens</h1>
                </div>
                <Container customClass="start">
                    {imagens.length > 0 &&
                        imagens.map((imagem) => (
                            <img className={styles.card} src={imagem.url}  key={imagem.id}/>
                        ))}

                </Container>
            </div>
        </div>

    )
}

export default Contact