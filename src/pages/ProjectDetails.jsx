import { Link, useParams } from "react-router";
import { projects } from "../data/projects";

function ProjectDetails() {
    const { id } = useParams();

    const project = projects.find(
        (project) => project.id === Number(id)
    );

    if (!project) {
        return (
            <section className="details">
                <h1>Проект не найден</h1>

                <Link to='..'>Назад к проектам</Link>
            </section>
        );
    }

    return (
        <section className="details">
            <h2 className="details__title">{project.title}</h2>

            <p className="details__description">{project.description}</p>

            <div className="details__actions">
                <Link
                    className="details__back"
                    to='..'
                >
                    ← Назад к проектам
                </Link>
            </div>
        </section>
    );
}

export default ProjectDetails;