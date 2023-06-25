import React, { useState } from 'react'
import './App.css'
import { AddButton } from './components/Button';
import { Done, Working } from './components/List';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [isDone, setIsDone] = useState();

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  }

  const clickAddButtonHandler = () => {
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

    const newDoneList = doneList.filter(function (item) {
      return item.id !== id
    });
    setDoneList(newDoneList);
  }

  const clickCompleteButtonHandler = (id) => {
    // console.log(id);
    const newTodoList = todoList.filter(function (item) {
      return item.id !== id
    });
    let newTodoList2 = todoList.filter(function (item) {
      return item.id === id
    })

    // 새로운 TodoList 생성
    const newTodoList3 = {
      id: newTodoList2[0].id,
      title: newTodoList2[0].title,
      content: newTodoList2[0].content,
      isDone: true
    }

    // let newTodoList3 = { ...newTodoList2 }
    // console.log("newTodoList :", newTodoList);
    // console.log("newTodoList2 :", newTodoList2);
    // console.log(newTodoList3);

    setTodoList(newTodoList);
    setDoneList([...doneList, newTodoList3]);
  }

  const clickCancelButtonHandler = (id) => {
    let newDoneList = doneList.filter(function (item) {
      return item.id !== id
    })

    let tempList = doneList.filter(function (item) {
      return item.id === id
    })

    // isDone 변경한 새로운 List 생성
    const changedList = {
      id: tempList[0].id,
      title: tempList[0].title,
      content: tempList[0].content,
      isDone: false
    }
    // console.log(changedList);
    // // let newTodoList3 = { ...newTodoList2 }

    // // setState({id: true});
    // console.log("newTodoList :", newTodoList);
    // console.log("newTodoList2 :", newTodoList2);
    // console.log(newTodoList3);

    setTodoList([...todoList, changedList]);
    setDoneList(newDoneList);
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
        <AddButton key={title} clickAddButtonHandler={clickAddButtonHandler}>추가하기</AddButton>
      </div>
      <div className="todoList">
        <span>Working.. 🔥</span>
        <div className="list">
          {/* {
            todoList.filter(function (item) {
              return item.isDone !== true
            }).map(function (item) {
              return (<div className="card">
                <span>{item.id}</span>
                <span>{item.title}</span>
                <span>{item.content}</span>
                <span>{item.isDone}</span>
                <div>
                  <DeleteButton item={item} clickDeleteButtonHandler={clickDeleteButtonHandler}>삭제하기</DeleteButton>
                  <CompleteButton item={item} clickCompleteButtonHandler={clickCompleteButtonHandler}>완료</CompleteButton>
                </div>
              </div>)
            })
          } */}
          {
            todoList.filter(function (item) {
              return item.isDone !== true
            }).map(function (item) {
              return <Working key={item.id} item={item} deleteFunction={clickDeleteButtonHandler} completeFunction={clickCompleteButtonHandler} />
            })
          }
        </div>
        <span>Done..! 🎉</span>
        <div className="list">
          {/* {
            doneList.filter(function (item) {
              return item.isDone === true
            }).map(function (item) {
              return (<div className="card">
                <span>{item.id}</span>
                <span>{item.title}</span>
                <span>{item.content}</span>
                <span>{item.isDone}</span>
                <div>
                  <DeleteButton item={item} clickDeleteButtonHandler={clickDeleteButtonHandler}>삭제하기</DeleteButton>
                  <CancelButton item={item} clickCancelButtonHandler={clickCancelButtonHandler}>취소</CancelButton>
                </div>
              </div>)
            })
          } */}
          {
            doneList.filter(function (item) {
              return item.isDone === true
            }).map(function (item) {
              return <Done key={item.id} item={item} deleteFunction={clickDeleteButtonHandler} cancelFunction={clickCancelButtonHandler} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App