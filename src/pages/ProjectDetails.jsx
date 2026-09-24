import { Link, useParams } from "react-router";
import { projects } from "../data/projects";

function ProjectDetails() {
    const { id } = useParams();

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
        </section>
    );
}

export default ProjectDetails;