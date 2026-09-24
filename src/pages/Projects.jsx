import { projects } from "../data/projects";
import { Link } from "react-router";

function Projects() {
    return (
        <section>
            <h2>Проекты</h2>

            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link to={String(project.id)}>
                            {project.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;