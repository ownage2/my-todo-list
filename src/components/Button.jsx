// 추가하기 버튼
const AddButton = ({ clickAddButtonHandler, children }) => {
    return <button onClick={clickAddButtonHandler}>{children}</button>
}
// 삭제하기 버튼
const DeleteButton = ({ clickDeleteButtonHandler, item, children }) => {
    return <button className="button1" onClick={() => clickDeleteButtonHandler(item.id)}>{children}</button>
}
// 완료 버튼
const CompleteButton = (function ({ clickCompleteButtonHandler, item, children }) {
    return <button className="button2" onClick={() => clickCompleteButtonHandler(item.id)}>{children}</button>
})
// 취소 버튼
const CancelButton = (function ({ clickCancelButtonHandler, item, children }) {
    return <button className="button2" onClick={() => clickCancelButtonHandler(item.id)}>{children}</button>
})

export { AddButton, DeleteButton, CompleteButton, CancelButton }