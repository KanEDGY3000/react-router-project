import { technologies } from "../data/technologies.js";
import { Link } from "react-router";

function Technologies() {
    return (
        <section>
            <ul className="catalog">
                {technologies.map((technology) => (
                    <li key={technology.slug}>
                        <Link
                            className="catalog__link"
                            to={technology.slug}
                        >
                            <h3 className="catalog__title">
                                {technology.title}
                            </h3>

                            <span>Подробнее →</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Technologies;