import "./Header.modules.css";

const MENUS = ["전부", "하는 중", "해냈음"];

export default function Header({ onClickMenu, activeMenu }) {
  return (
    <div>
      <div className="category">
        {MENUS.map((menu) => (
          <p
            key={menu}
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
