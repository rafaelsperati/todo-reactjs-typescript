import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  display: flex;
  align-items: center;

  .add {
    margin-right: 5px;
    cursor: pointer;
    font-size: 24px;
  }

  .add:hover {
    color: green;
  }

  input {
    border: 0px;
    background: transparent;
    outline: 0;
    color: #fff;
    font-size: 18px;
    flex: 1;
  }
`;
