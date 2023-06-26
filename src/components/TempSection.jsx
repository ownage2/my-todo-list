const TempSection = ({ title, isDone, todoList, clickDeleteButtonHandler, clickToggleButtonHandler }) => {
    return (
        <div className="list-section">
            <span>{title}</span>
            <div className="card-list">
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
        </div>
    )
}

export default TempSection