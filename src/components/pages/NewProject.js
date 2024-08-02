import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

    const navigate = useNavigate()

    function createPost(project) { //Da post do project criado no banco de dados (é chamada no projectForm pelo form)
        project.cost = 0
        project.services = []

        fetch('http://localhost:8000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => { //Manda o usuario pra pagina projects com uma msg de sucesso
                console.log(data)
                navigate("/projects", { state: { message: "Projeto criado com sucesso!" } })
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para então adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
        </div>
    )
}

export default NewProject