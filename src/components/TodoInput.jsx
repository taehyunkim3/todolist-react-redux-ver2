import React, {useCallback, useState} from 'react'
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import { addItem } from '../redux/modules/reducer';



const TodoInputBlock = styled.div`

display: flex;
justify-content: center;
align-items: center;
font-size: 1.5rem;

width:90%;
form {
    width: 100%;
    height: 100%;

}

input {
    height: 40px;
    width: 70%;
    background: none;
    border: none;
    border-bottom: 1px dotted gray;
margin-bottom: 5px;
font-size: 1.5rem;
font-family: 'Hi Melody', cursive;
}

button {
    height: 60px;
    border: none;
    border-radius: 20px;
    translate: 30px -30px;
    font-size: 1.5rem;
    font-family: 'Hi Melody', cursive;

}
`;




const TodoInput = () => {
const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);
  
  const onChangeBody = useCallback((e) => {
    setBody(e.target.value);
  }, []);
  
  const onSubmit = useCallback((e)=>{
    const data = {
      id: uuidv4(),
      title,
      body,
      isDone: false,
    }
    !title || !body ? alert('내용을 입력하세요') : dispatch(addItem(data));
    setTitle('');
    setBody('');
    e.preventDefault();
  },[dispatch, title, body])
  



  return (
    <TodoInputBlock>
        <form onSubmit={onSubmit}>
제목 : <input type='text' value={title} onChange={onChangeTitle}/><br/>
내용 : <input type='text'value={body} onChange={onChangeBody}/>
<button type='submit'>등록하기</button>
        </form>



    </TodoInputBlock>
  )
}

export default TodoInput