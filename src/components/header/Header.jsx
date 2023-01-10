import { useLightMode } from "../../context/LightModeContext";
import "./Header.modules.css";
import { HiMoon, HiSun } from "react-icons/hi";

const MENUS = ["전부", "하는 중", "해냈음"];

export default function Header({ onClickMenu, activeMenu }) {
  // const { lightMode, toggleLightMode } = useContext(LightModeContext);
  const { lightMode, toggleLightMode } = useLightMode();

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
      <button className="button" onClick={toggleLightMode}>
        {lightMode ? <HiMoon /> : <HiSun />}
      </button>
    </div>
  );
}
