import React, { useState } from 'react'
import './App.css'
import { Header, Add, List } from './components/component';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeHandler = (event) => {
    // input태그의 name에 맞게 event처리
    (event.target.name === "title") ? setTitle(event.target.value) : setContent(event.target.value);
  }

  const onSubmitHandler = () => {
    // 새로운 id 생성
    const newId = id + 1;
    setId(newId);

    // 새로운 TodoList 생성
    const newTodoList = {
      id: newId,
      title: title,
      content: content,
      isDone: false
    }

    // 새로운 Todo 추가
    setTodoList([...todoList, newTodoList]);
    // 새로운 Todo 추가 후 제목input, 내용input 빈 값으로 초기화
    setTitle("");
    setContent("");
  }

  // 삭제 버튼
  const clickDeleteButtonHandler = (id) => {
    const newTodoList = todoList.filter(function (item) {
      return item.id !== id
    });
    setTodoList(newTodoList);
  }

  // 완료, 취소 버튼
  const clickToggleButtonHandler = (id) => {
    // TodoList에서 id에 해당하는 list를 제거한 새로운 배열 생성
    let newTodoList1 = todoList.filter(function (item) {
      return item.id !== id
    })

    // TodoList에서 id에 해당하는 list로 새로운 배열 생성
    let newTodoList2 = todoList.filter(function (item) {
      return item.id === id
    })

    // id에 해당하는 list의 isDone값을 반대로 변경(true ↔ false)
    newTodoList2[0].isDone = !newTodoList2[0].isDone

    setTodoList([...newTodoList1, ...newTodoList2]);
  }

  return (
    <div className="myApp">
      <Header />
      <Add title={title} content={content} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
      <div className="todoList">
        <List
          title="Working.. 🔥"
          isDone={false}
          todoList={todoList}
          clickDeleteButtonHandler={clickDeleteButtonHandler}
          clickToggleButtonHandler={clickToggleButtonHandler}
        />
        <List
          title="Done..! 🎉"
          isDone={true}
          todoList={todoList}
          clickDeleteButtonHandler={clickDeleteButtonHandler}
          clickToggleButtonHandler={clickToggleButtonHandler}
        />
      </div>
    </div>
  )
}

export default App