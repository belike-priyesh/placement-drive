import { Tabs } from "../../constants";
import { NavLink } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <div className="Header">
      {Tabs.map((item) => (
        <NavLink
          key={item.title}
          className={({ isActive }) =>
            isActive ? "NavLink ActiveTab" : "NavLink"
          }
          to={item.link}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Header;
