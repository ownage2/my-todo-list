import React, { useState } from 'react'
import './App.css'
import Header from './components/Header';
import AddSection from './components/AddSection';
import ListSection from './components/ListSection';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeHandler = (event) => {
    // input태그의 name에 맞게 event처리
    (event.target.name === "title") ? setTitle(event.target.value) : setContent(event.target.value);
  }

  // 추가하기 버튼
  const onSubmitHandler = () => {
    // 새로운 id 생성
    const newId = id + 1;
    setId(newId);
    
    if (title.length === 0 || content.length === 0) {
      alert("제목과 내용을 모두 입력해주세요!")
    } else {
      // 새로운 Todo생성하여 List에 추가
      setTodoList([...todoList, { id: newId, title, content, isDone: false }]);

      // 새로운 Todo 추가 후 제목input, 내용input 빈 값으로 초기화
      setTitle("");
      setContent("");
    }
  }

  // 삭제 버튼
  const clickDeleteButtonHandler = (id) => {
    // id를 제외한 배열을 만들어서 List를 변경
    setTodoList(todoList.filter((item) => item.id !== id));
  }

  // 완료, 취소 버튼
  const clickToggleButtonHandler = (id) => {
    // todoList를 복사하여 copyList 배열 생성
    let copyList = [...todoList];

    // todoList 배열에서 id에 맞는 객체를 찾아서 index 확인
    const index = todoList.findIndex(item => item.id === id);

    // copyList에서 index번째 객체의 isDone값을 반대로 변경(true ↔ false)
    copyList[index] = { ...copyList[index], isDone: !copyList[index].isDone }

    // isDone을 변경한 복사배열인 copyList를 todoList에 넣어 state 변경
    setTodoList([...copyList]);
  }

  return (
    <div className="myApp">
      <Header />
      <AddSection
        title={title}
        content={content}
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
      />
      <ListSection
        todoList={todoList}
        clickDeleteButtonHandler={clickDeleteButtonHandler}
        clickToggleButtonHandler={clickToggleButtonHandler}
      />
    </div>
  )
}

export default App