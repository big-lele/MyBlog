import { NavLink } from "react-router-dom";
import { FC } from "react"
import './Navigation.css';

type NavigationProps = {
    title: string | null | undefined;
    link: string | undefined;
    onClick?: () => void;
}

const Navigation: FC<NavigationProps> = ({ title, onClick, link}) => {
    return <NavLink
        to={link ?? ""}
        onClick={() => onClick && onClick()}
        className={({ isActive }) => isActive && !link?.match(/#\w+/g) ? "menu-link-active " : "menu-link"}
    >
        {title}
    </NavLink>
}

export default Navigation;