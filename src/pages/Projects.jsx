import { projects } from "../data/projects";
import { Link } from "react-router";

function Projects() {
    return (
        <section>
            <h1>Проекты</h1>

            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link to={`/projects/${project.id}`}>
                            {project.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;