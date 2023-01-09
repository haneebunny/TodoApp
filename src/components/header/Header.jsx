import { useContext } from "react";
import { LightModeContext } from "../../context/LightModeContext";
import "./Header.modules.css";

const MENUS = ["전부", "하는 중", "해냈음"];

export default function Header({ onClickMenu, activeMenu }) {
  const { lightMode, toggleLightMode } = useContext(LightModeContext);
  return (
    <div className="header">
      <div className="category">
        {MENUS.map((menu) => (
          <p
            key={menu}
            id={menu}
            onClick={onClickMenu}
            className={
              (activeMenu === menu ? "active " : "") +
              (lightMode ? "light " : "dark ") +
              "menu"
            }
          >
            {menu}
          </p>
        ))}
      </div>
      {/* <button onClick={() => toggleLightMode()}>해달</button> */}
    </div>
  );
}
