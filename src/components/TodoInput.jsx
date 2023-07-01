import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { addItem } from "../redux/modules/reducer";
import useInput from "../hook/useInput";

const TodoInput = () => {
  const dispatch = useDispatch();

  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  // const onChangeTitle = useCallback((e) => {
  //   setTitle(e.target.value);
  // }, []);

  // const onChangeBody = useCallback((e) => {
  //   setBody(e.target.value);
  // }, []);

  const {
    value: title,
    onChange: onChangeTitle,
    reset: resetTitle,
  } = useInput(""); //custom hook으로 합체
  const {
    value: body,
    onChange: onChangeBody,
    reset: resetBody,
  } = useInput(""); //custom hook으로 합체

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!title || !body) {
        setError("제목과 내용을 모두 입력해주세요"); //에러 메세지
        return;
      }
      const data = {
        id: uuidv4(),
        title,
        body,
        isDone: false,
      };
      dispatch(addItem(data));
      resetTitle("");
      resetBody("");
      setError(null); //에러 메세지 초기화
    },
    [dispatch, title, body, resetBody, resetTitle] //업데이트 반영하도록
  );

  return (
    <>
      {error && (
        <div style={{ color: "red", position: "absolute" }}>{error}</div> // 에러 메세지 입력필드 아래에 추가.
      )}

      <TodoInputBlock>
        <form onSubmit={onSubmit}>
          제목 : <input type="text" value={title} onChange={onChangeTitle} />
          <br />
          내용 : <input type="text" value={body} onChange={onChangeBody} />
          <button type="submit">등록하기</button>
        </form>
      </TodoInputBlock>
    </>
  );
};

const TodoInputBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  width: 90%;
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
    font-family: "Hi Melody", cursive;
  }

  button {
    height: 60px;
    border: none;
    border-radius: 20px;
    translate: 30px -30px;
    font-size: 1.5rem;
    font-family: "Hi Melody", cursive;
    cursor: pointer;
  }
`;
export default TodoInput;
