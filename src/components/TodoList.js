const TodoList = ({todos,oncheck,onRemove}) => {
  return (
    <div className="todo-list">
      <ul>
        {
          todos.map((list)=>{
            const {id,text,checked}=list;
            return (
              <li key={id}>
                <input type="checkbox" checked={checked} onChange={()=>{oncheck(id)}}/>
                <label className={checked? 'checked':null}>{text}</label>
                <button onClick={()=>{onRemove(id)}}>-</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
};

export default TodoList;