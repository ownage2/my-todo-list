import { DeleteButton, CancelButton, CompleteButton } from "./Button"

const Working = ({ item, deleteFunction, clicktoggleButtonHandler }) => {
    return (
        <div className="card">
            <div className="cardTop">
                <span className="cardTitle">{item.title}</span>
                <span className="cardContent">{item.content}</span>
            </div>
            <div className="cardBottom">
                <DeleteButton item={item} clickDeleteButtonHandler={deleteFunction}>삭제하기</DeleteButton>
                <CompleteButton item={item} clicktoggleButtonHandler={clicktoggleButtonHandler}>완료</CompleteButton>
            </div>
        </div>
    )
}

const Done = ({ item, deleteFunction, clicktoggleButtonHandler }) => {
    return (
        <div className="card">
            <div className="cardTop">
                <span className="cardTitle">{item.title}</span>
                <span className="cardContent">{item.content}</span>
            </div>
            <div className="cardBottom">
                <DeleteButton item={item} clickDeleteButtonHandler={deleteFunction}>삭제하기</DeleteButton>
                <CancelButton item={item} clicktoggleButtonHandler={clicktoggleButtonHandler}>취소</CancelButton>
            </div>
        </div>
    )
}

export { Done, Working }