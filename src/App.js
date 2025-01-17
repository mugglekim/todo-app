import { useEffect, useState } from 'react';
import './App.scss';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from "./components/TodoTemplate";
import TodoList from './components/TodoList';

const App = () => {
  const [todos,setTodos]=useState(()=>{
    //todos의 초기값
    const load=localStorage.getItem('todos');
    return load? JSON.parse(load):[];
  });

  //개발자도구-애플리케이션-로컬스토리지-로컬호스트에서 확인가능
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);
  
  const handleInsert=(value)=>{
    // const todo={id:todos.length+1, text:value, checked:false};
    const todo={id:Date.now(), text:value, checked:false};    
    setTodos([...todos,todo]);
  }
  // const handleInsert=useCallback((value)=>{
  //   // const todo={id:todos.length+1, text:value, checked:false};
  //   const todo={id:Date.now(), text:value, checked:false};    
  //   setTodos((prev)=>{return [...prev,todo]});
  // },[]);

  const handleChecked=(id)=>{
    const toggle=todos.map((list)=>{
      return list.id===id? {id:list.id, text:list.text, checked:!list.checked}:list
    })
    setTodos(toggle);
  }

  const handleDelete=(id)=>{
    //해당 id만 제외하고 todos 배열을 새롭게 구성
    const result=todos.filter((list)=>{
      return list.id !== id;
    })
    setTodos(result);
  }

  return (
    <div className="app">
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert}/>
        <TodoList todos={todos} oncheck={handleChecked} onRemove={handleDelete}/>
      </TodoTemplate>
    </div>
  );
};

export default App;