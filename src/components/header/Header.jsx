import "./Header.modules.css";

const MENUS = ["All", "Doing", "Done"];

export default function Header({ onClickMenu, activeMenu }) {
  return (
    <div>
      <div className="category">
        {MENUS.map((menu) => (
          <p
            id={menu}
            onClick={onClickMenu}
            className={`${activeMenu === menu ? "active menu" : "menu"}`}
          >
            {menu}
          </p>
        ))}
      </div>
    </div>
  );
}
