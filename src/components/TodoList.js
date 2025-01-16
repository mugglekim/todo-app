

const TodoList = ({todos,oncheck}) => {
  return (
    <div className="todo-list">
      <ul>
        {
          todos.map((list)=>{
            const {id,text,checked}=list;
            return (
              <li key={id}>
                <input type="checkbox" checked={checked} onChange={()=>{oncheck(id)}}/>
                <label className={checked? 'line':''}>{text}</label>
                <button>❌</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
};

export default TodoList;