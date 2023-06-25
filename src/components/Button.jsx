// 추가하기 버튼
const AddButton = ({ onSubmitHandler, children }) => {
    return <button onClick={onSubmitHandler}>{children}</button>
}
// 삭제하기 버튼
const DeleteButton = ({ clickDeleteButtonHandler, item, children }) => {
    return <button className="button1" onClick={() => clickDeleteButtonHandler(item.id)}>{children}</button>
}
// 완료 버튼
const CompleteButton = (function ({ clicktoggleButtonHandler, item, children }) {
    return <button className="button2" onClick={() => clicktoggleButtonHandler(item.id)}>{children}</button>
})
// 취소 버튼
const CancelButton = (function ({ clicktoggleButtonHandler, item, children }) {
    return <button className="button2" onClick={() => clicktoggleButtonHandler(item.id)}>{children}</button>
})

export { AddButton, DeleteButton, CompleteButton, CancelButton }