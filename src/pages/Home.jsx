import { Link } from "react-router";

function Home() {
    return (
        <section>
            <h1>Главная страница</h1>

            <p>
                Учебный проект для изучения React Router
            </p>

            <Link to='/technologies/typescript'>Посмотреть Type Script</Link>
        </section>
    );
}
export default Home;