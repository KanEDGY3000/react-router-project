import { Link, useParams, useNavigate } from "react-router";
import { projects } from "../data/projects";

function ProjectDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    function handleGoBack() {
        navigate(-1);
    }

    const project = projects.find(
        (project) => project.id === Number(id)
    );

    if (!project) {
        return (
            <section>
                <h1>Проект не найден</h1>
            </section>
        );
    }

    return (
        <section>
            <h1>{project.title}</h1>

            <p>{project.description}</p>

            <Link to='..'>Назад к проектам</Link>

            <button
                type="button"
                onClick={handleGoBack}
            >
                Вернуться назад
            </button>
        </section>
    );
}

export default ProjectDetails;