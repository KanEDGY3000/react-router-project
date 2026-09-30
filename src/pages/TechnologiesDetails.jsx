
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
                <h1>Технология не найдена</h1>

                <Link to='..'>Назад к технологиям</Link>
            </section>
        )
    }

    return (
        <section className="details">
            <h2 className="details__title">{technology.title}</h2>

            <p className="details__description">{technology.description}</p>

            <div className="details__action">
                <Link
                    className="details__back"
                    to='..'
                >
                    Назад к технологиям
                </Link>
            </div>

        </section>
    );
}

export default TechnologiesDetails;