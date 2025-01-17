import { useState } from "react";

const TodoInsert = ({onInsert}) => {
  const [value, setValue]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(value.length>0){
      onInsert(value);
      setValue('');
    }
  }
  const handleInput=(e)=>{
    setValue(e.target.value);
  }
  return (
    <div>
      <form className="todo-insert" onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder="할일을 입력하세요" onChange={handleInput}/>
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default TodoInsert;