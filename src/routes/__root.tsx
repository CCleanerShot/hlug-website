import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import NavButton from "../components/NavButton";

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-2 flex gap-2">
                <NavButton route="/" text="Home" />
                <NavButton route="/advocacy" text="Advocacy" />
                <NavButton route="/education" text="Education" />
                <NavButton route="/social" text="Social" />
                <NavButton route="/support" text="Support" />
            </div>
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
});
