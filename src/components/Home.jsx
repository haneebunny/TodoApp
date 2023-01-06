import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const onClickAdd = () => {
    const temp = list;
    temp.push(input);
    console.log(temp);
    setList([...temp]);
    setInput("");
  };

  const onClickDelete = (id) => {
    // 해당하는 item을 지울거야.
    // 그 item이 빠진 목록으로 setList

    const temp = list.filter((item) => item !== id);

    setList([...temp]);
  };

  const onPressEnter = (e) => {
    if (e.key === "Enter") {
      onClickAdd();
    }
  };
  return (
    <div>
      <div className="wrapper">
        <div className="todo-wrapper">
          <div className="header"></div>
          <ul className="todo-list">
            {list.map((item, i) => (
              <div key={i}>
                <li className="todo-item">{item}</li>
                <button
                  id={item}
                  className="delete-button"
                  onClick={(e) => onClickDelete(e.target.id)}
                >
                  X
                </button>
              </div>
            ))}
          </ul>
          <input
            className="todo-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={onPressEnter}
          />
          <button className="add-button" onClick={onClickAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
