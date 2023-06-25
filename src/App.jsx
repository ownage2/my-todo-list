import React, { useState } from 'react'
import './App.css'
import { AddButton } from './components/Button';
import { Done, Working } from './components/List';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  }

  const onSubmitHandler = () => {
    // 새로운 Id번호 생성
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

  const clickDeleteButtonHandler = (id) => {
    const newTodoList = todoList.filter(function (item) {
      return item.id !== id
    });
    setTodoList(newTodoList);
  } 

  const clicktoggleButtonHandler = (id) => {
    let newTodoList1 = todoList.filter(function (item) {
      return item.id !== id
    })
    let newTodoList2 = todoList.filter(function (item) {
      return item.id === id
    })
    newTodoList2[0].isDone = !newTodoList2[0].isDone 
    

    // newTodoList2[0].isDone = !newTodoList2[0].isDone 
    // 새로운 TodoList 생성
    // const tempList = {
    //   id: newTodoList2[0].id,
    //   title: newTodoList2[0].title,
    //   content: newTodoList2[0].content,
    //   // isDone: true // 고정값을 주면 
    //   isDone : !newTodoList2[0].isDone   // 62번째줄만 바꾸면 되는데 58-60 번째줄은 불필요한데 이걸 개선해볼까요. 
    // }

    setTodoList([...newTodoList1, ...newTodoList2]);
  }

  return (
    <div className="myApp">
      <div className="header">
        <span>My Todo List</span>
        <span>React</span>
      </div>
      <div className="add">
        <div className="input">
          <span>제목</span><input value={title} onChange={titleChangeHandler}></input>
          <span>내용</span><input value={content} onChange={contentChangeHandler}></input>
        </div>
        <AddButton key={title} onSubmitHandler={onSubmitHandler}>추가하기</AddButton>
      </div>
      <div className="todoList">
        <span>Working.. 🔥</span>
        <div className="list">
          {
            todoList.filter(function (item) {
              return item.isDone !== true
            }).map(function (item) {
              return <Working key={item.id} item={item} deleteFunction={clickDeleteButtonHandler} clicktoggleButtonHandler={clicktoggleButtonHandler} />
            })
          }
        </div>
        <span>Done..! 🎉</span>
        <div className="list">
          {
            todoList.filter(function (item) {
              return item.isDone === true
            }).map(function (item) {
              return <Done key={item.id} item={item} deleteFunction={clickDeleteButtonHandler} clicktoggleButtonHandler={clicktoggleButtonHandler} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App