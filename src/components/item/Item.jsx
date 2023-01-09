import { v4 as uuidv4 } from "uuid";
import { FaTrashAlt } from "react-icons/fa";
import "./Item.modules.css";

export default function Item({
  list,
  activeMenu,
  onClickCheck,
  onClickDelete,
}) {
  // all이면 다 보여주고
  // doing이면 done이 false인 것만 보여주고
  // done이면 done이 true인 것만 보여주고
  // activeMenu === "doing" =>

  return (
    <div>
      {list
        .filter((el) => {
          if (activeMenu === "전부") {
            return true;
          } else if (activeMenu === "하는 중") {
            return el.done === false;
          } else {
            return el.done === true;
          }
        })
        ?.map((item, i) => (
          <div className="todo-li" key={uuidv4()}>
            <input
              id="todo-checkbox"
              name="checkbox"
              className="todo-checkbox"
              type="checkbox"
              checked={item.done}
              onChange={onClickCheck(item)}
            />
            <label htmlFor="todo-checkbox" className="todo-item">
              {item.name}
            </label>

            <button
              id={item.id}
              className="delete-button"
              onClick={() => onClickDelete(item.id)}
            >
              <FaTrashAlt />
            </button>
          </div>
        ))}
    </div>
  );
}
