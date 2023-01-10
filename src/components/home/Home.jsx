import { useContext, useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../header/Header";
import Item from "../item/Item";
import "./Home.modules.css";
import { message } from "antd";

import mokoko from "../../img/mokoko.jpeg";
import heartmokoko from "../../img/heartmokoko.png";

import { useLightMode } from "../../context/LightModeContext";

export default function Home() {
  const { lightMode } = useLightMode();

  const [messageApi, contextHolder] = message.useMessage();

  const [input, setInput] = useState("");
  const [list, setList] = useState(() => readTodos());
  const [activeMenu, setActiveMenu] = useState("전부");

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    if (todoList) {
      setList(todoList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  const info = () => {
    messageApi.info("최대 갯수를 초과하였습니다!😗");
  };

  const onClickMenu = (e) => {
    const activeMenu = e.target.id;
    setActiveMenu(activeMenu);
  };

  const onClickAdd = () => {
    if (input.trim().length === 0) return;

    const temp = JSON.parse(localStorage.getItem("todoList") || "[]");
    if (temp.length >= 8) {
      info();
      setInput("");
      return;
    }
    const item = { name: input, id: uuidv4(), done: false };
    temp.push(item);

    localStorage.setItem("todoList", JSON.stringify(temp));
    setList([...temp]);
    setInput("");
    // if (activeMenu === "해냈음") {
    //   setActiveMenu("전부");
    // }
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

  const onClickCheck = (item) => {
    console.log(item);
    setList(
      list.map((todo) =>
        todo.id === item.id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div>
      <div className="wrapper">
        <div className={(lightMode ? "light " : "dark ") + "todo-wrapper"}>
          <img
            src={lightMode ? heartmokoko : mokoko}
            alt="mokoko"
            onerror="this.style.display='none'"
          />
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
            <div className="input-wrapper">
              <input
                className="todo-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={onPressEnter}
              />
              <button className="add-button" onClick={onClickAdd}>
                추가
              </button>
            </div>
            {contextHolder}
          </div>
        </div>
      </div>
    </div>
  );
}

function readTodos() {
  const todoList = JSON.parse(localStorage.getItem("todoList") || []);
  return todoList;
}
