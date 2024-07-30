import { useState, useEffect } from 'react'

import Input from "../form/Input"
import Select from "../form/Select"
import SubmitBtn from "../form/SubmitBtn"

function ProjectForm({ btnText }) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])



    return (
        <form>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" />
            <Input type="number" text="Orçamento total do projeto" name="budget" placeholder="Insira o orçamento total" />
            <Select text="Selecione a categoria" name="category_id" options={categories} />
            <SubmitBtn text={btnText} />
        </form>
    )
}

export default ProjectForm