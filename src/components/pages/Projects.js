import { useLocation } from "react-router-dom"
import React, { useState, useEffect } from 'react';

import Message from "../layout/Message"
import Container from '../layout/Container'
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../project/ProjectCard"

import styles from './Projects.module.css'


function Projects() {

    const [projects, setProjects] = useState([])
    const[confirmation, setConfirmation] = useState(true)


    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:8000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        }).then((resp) => resp.json())
            .then((data) => {
                setProjects(data)
            })
            .catch((err) => console.log(err))

    }, [])

    function removeProject(id) {
        fetch(`http://localhost:8000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProjects(projects.filter((project) => project.id !== id))

            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        const confirmation_box = document.getElementById("confirmation")

        if(confirmation) {
            confirmation_box.style.display = 'block'
        }
        else{
            confirmation_box.style.display = 'none'
        }
        
    });


    function aparecer() {
        confirmation ? setConfirmation(false) : setConfirmation(true)
    }
    

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProject}
                        />
                    ))}

                {projects.length === 0 && <p>Não há projetos cadastrados!</p>}

            </Container>
            <button onClick={aparecer}>Apareça</button>
            <div id="confirmation" className={styles.delete_confirmation}>
                <div className={styles.delete_confirmation_inside}>
                    <p>Excluir o projeto permanentemente?</p>
                    <div className={styles.bttns}>
                        <button>Cancelar</button>
                        <button>Excluir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects