
import { useNavigate } from "react-router";

function NotFound() {

    const navigation = useNavigate();

    function handleGoHome() {
        navigation('/');
    }

    return (
        <section className="not-found">
            <span
                className="not-found__code"
                aria-hidden="true"
            >
                404
            </span>

            <h1>Страница не найдена</h1>

            <p>
                Возможно, адрес указан неправильно
                или такой страницы больше нет.
            </p>

            <button
                className="not-found__button"
                type="button"
                onClick={handleGoHome}
            >
                На главную
            </button>
        </section>
    );
}

export default NotFound;