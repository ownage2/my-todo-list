const Header = () => {
    return (
        <div className="header">
            <span>My Todo List</span>
            <span>React</span>
        </div>
    )
}

const Add = ({ title, content, onChangeHandler, onSubmitHandler }) => {
    return (
        <div className="add">
            <div className="input">
                <span>제목</span><input name="title" value={title} onChange={onChangeHandler}></input>
                <span>내용</span><input name="content" value={content} onChange={onChangeHandler}></input>
            </div>
            <button onClick={onSubmitHandler}>추가하기</button>
        </div>
    )
}

const List = ({ title, isDone, todoList, clickDeleteButtonHandler, clickToggleButtonHandler }) => {
    return (
        <>
            <span>{title}</span>
            <div className="list">
                {
                    todoList.filter(function (item) {
                        return item.isDone === isDone
                    }).map(function (item) {
                        return (
                            <div key={item.id} className="card">
                                <div className="cardTop">
                                    <span className="cardTitle">{item.title}</span>
                                    <span className="cardContent">{item.content}</span>
                                </div>
                                <div className="cardBottom">
                                    <button className="button1" onClick={() => clickDeleteButtonHandler(item.id)}>삭제하기</button>
                                    <button className="button2" onClick={() => clickToggleButtonHandler(item.id)}>{isDone ? "취소" : "완료"}</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </ >
    )
}

export { Header, Add, List }