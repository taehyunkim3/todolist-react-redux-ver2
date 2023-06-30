import React from 'react'
import { styled } from 'styled-components'
import TodoItem from '../components/TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import{deleteItem, updateItem} from '../redux/modules/reducer'

const TodoItemContainer = () => {

const dispatch = useDispatch();
const todos = useSelector(todos=>todos.todos);

const onDelete = (id)=> dispatch(deleteItem({id}));
const onUpdate = (id)=> dispatch(updateItem({id}));

  return (
    <TodoItemContainerBlock>
        <h3>진행중</h3>
            {todos
                .filter((todo)=>todo.isDone===false)
                .map((todo)=>{
                    return (
                        <TodoItem 
                        key={todo.id}
                        todo={todo} 
                        onDelete = {()=>{onDelete(todo.id)}} 
                        onUpdate = {()=>{onUpdate(todo.id)}} 
                        />
                    )
                })}
        <h3>완료!</h3>
            {todos
                .filter((todo)=>todo.isDone===true)
                .map((todo)=>{
                    return (
                        <TodoItem 
                        key={todo.id}
                        todo={todo} 
                        onDelete = {()=>{onDelete(todo.id)}} 
                        onUpdate = {()=>{onUpdate(todo.id)}} 
                        />
                    )
                })}
    </TodoItemContainerBlock>
    )
}

const TodoItemContainerBlock = styled.div`
width: 90%;
height: 100%;
h3{
    font-size : 2rem;
    margin-bottom: 10px;
    border-bottom: 1px dotted red;
    text-align: ;
}
`;

export default TodoItemContainer