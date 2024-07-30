import Input from "../form/Input"
import Select from "../form/Select"
import SubmitBtn from "../form/SubmitBtn"

function ProjectForm({ btnText }) {
    return (
        <form>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" />
            <Input type="number" text="Orçamento total do projeto" name="budget" placeholder="Insira o orçamento total" />
            
            <Select text="Selecione a categoria" name="category_id" />
            <SubmitBtn text={btnText} />
        </form>
    )
}

export default ProjectForm