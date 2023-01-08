import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../header/Header";
import Item from "../item/Item";
import "./Home.modules.css";

const MENUS = ["All", "Doing", "Done"];

export default function Home() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    if (todoList) {
      setList(todoList);
    }
  }, []);

  const onClickMenu = (e) => {
    const activeMenu = e.target.id;
    setActiveMenu(activeMenu);
  };

  const onClickAdd = () => {
    const temp = JSON.parse(localStorage.getItem("todoList") || "[]");
    const item = { name: input, id: uuidv4(), done: false };
    temp.push(item);

    localStorage.setItem("todoList", JSON.stringify(temp));
    setList([...temp]);
    setInput("");
  };

  const onClickDelete = (id) => {
    // 해당하는 item을 지울거야.
    // 그 item이 빠진 목록으로 setList

    const temp = list.filter((item) => item.id !== id);
    localStorage.setItem("todoList", JSON.stringify(temp));
    setList([...temp]);
  };

  const onPressEnter = (e) => {
    if (e.key === "Enter") {
      onClickAdd();
    }
  };

  const onClickCheck = (item) => (e) => {
    setList(
      list.map((todo) =>
        todo.id === item.id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div>
      <div className="wrapper">
        <div className="todo-wrapper">
          <div className="header">
            <Header activeMenu={activeMenu} onClickMenu={onClickMenu} />
          </div>
          <div className="todo-list-wrapper">
            <ul className="todo-list">
              <Item
                list={list}
                onClickCheck={onClickCheck}
                onClickDelete={onClickDelete}
                activeMenu={activeMenu}
              />
            </ul>
            <input
              className="todo-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={onPressEnter}
            />
            <button className="add-button" onClick={onClickAdd}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
