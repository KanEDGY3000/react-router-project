import { Outlet } from "react-router";

function TechnologiesLayout() {
    return (
        <section>
            <h1>Раздел технологий</h1>

            <Outlet/>
        </section>
    );
}

export default TechnologiesLayout;