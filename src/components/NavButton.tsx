import { Link, useLocation } from "@tanstack/react-router";
import type { Route } from "../client/routes";

type Props = {
    route: Route;
    text: string;
};

const NavButton = ({ route, text }: Props) => {
    const currentRoute = useLocation();
    const basePath = currentRoute.pathname.slice(import.meta.env.BASE_URL.length - 1);

    console.log(basePath);

    return <Link to={route}>{text}</Link>;
};

export default NavButton;
