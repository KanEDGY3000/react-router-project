import { projects } from "../data/projects";
import { Link } from "react-router";

function Projects() {
    return (
        <section>
            <h2>Проекты</h2>

            <ul className="catalog">
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link
                            className="catalog__link"
                            to={String(project.id)}
                        >
                            <h3 className="catalog__title">
                                {project.title}
                            </h3>

                            <span>Подробнее →</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;