
import { useNavigate } from "react-router";

function NotFound() {
    
    const navigation = useNavigate();

    function handleGoHome() {
        navigation('/');
    }
    
    return (
        <section>
            <h1>404</h1>

            <p>Страница не найдена</p>

            <button
                type="button"
                onClick={handleGoHome}
            >
                На главную
            </button>
        </section>
    );
}

export default NotFound;