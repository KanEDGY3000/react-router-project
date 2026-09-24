
import { Outlet } from "react-router";

function ProjectsLayout() {
    return (
        <section>
            <h1>Раздел проектов</h1>

            <Outlet/>
        </section>
    );
}

export default ProjectsLayout;