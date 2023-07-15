const AddSection = ({ title, content, onChangeHandler, onSubmitHandler }) => {
    return (
        <div className="add-section">
            <div className="input">
                <span>제목</span><input name="title" value={title} onChange={onChangeHandler}></input>
                <span>내용</span><input name="content" value={content} onChange={onChangeHandler}></input>
            </div>
            <button onClick={onSubmitHandler}>추가하기2</button>
        </div>
    )
}

export default AddSection