
import { useParams, Link } from "react-router";
import { technologies } from "../data/technologies.js";

function TechnologiesDetails() {

    const { slug } = useParams();
    const technology = technologies.find((technology) =>
        technology.slug === slug
    );

    if (!technology) {
        return (
            <section>
                <h1>Технологии не найдены</h1>
            </section>
        )
    }

    return (
        <section>
            <h1>{technology.title}</h1>

            <p>{technology.description}</p>

            <Link to='..'>Назад к технологиям</Link>
        </section>
    );
}

export default TechnologiesDetails;