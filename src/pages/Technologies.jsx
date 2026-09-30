import { technologies } from "../data/technologies.js";
import { Link } from "react-router";

function Technologies() {
    return (
        <section>
            <ul>
                {technologies.map((technology) => (
                    <li key={technology.slug}>
                        <Link to={technology.slug}>{technology.title}</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Technologies;