import { styled } from "styled-components";

const TemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
  width: 70%;
  min-width: 670px;
  max-width: 1000px;
  min-height: 400px;
  margin-bottom: 30px;
  margin-top: 2rem;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  z-index:1;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100%;
    color: black;
    background: #FADD60;
    background: -moz-linear-gradient(top, #FADD60 0%, #F9C303 100%);
    background: -webkit-linear-gradient(top, #FADD60 0%, #F9C303 100%);
    background: linear-gradient(to bottom, #FADD60 0%, #F9C303 100%);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    font-size: 2rem;
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-bottom: 2px solid #afa78a;
  }

`;



const TodoTemplate = ({ children }) => {
  return (
    <TemplateBlock>
      <div className="header">My Todo List</div>
      {children}
    </TemplateBlock>
  );
};

export default TodoTemplate;