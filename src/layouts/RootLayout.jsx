
import { Outlet, NavLink } from "react-router";

function RootLayout() {
    return (
        <>
            <nav className="nav">
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? 'nav__link nav__link--active'
                            : 'nav__link'
                    }
                    to='/'
                    end
                >
                    Главная
                </NavLink>

                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? 'nav__link nav__link--active'
                            : 'nav__link'
                    }
                    to='/projects'
                >
                    Проекты
                </NavLink>
            </nav>

            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default RootLayout;