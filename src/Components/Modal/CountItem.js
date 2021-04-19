import React from "react";
import styled from "styled-components";

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
  text-align: center;
`;

const ButtonCount = styled.button`
  background-color: rgb(153, 149, 149);
  height: 100%;
  width: 30px;
  color: #000;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.4s;
  &:hover {
    background-color: #df915d;
  }
`;

export function CountItem({ count, setCount, onChange }) {
  return (
    <CountWrapper>
      <span> amount </span>{" "}
      <DivWrapper>
        <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>
          -
        </ButtonCount>{" "}
        <CountInput
          value={count < 1 ? 1 : count}
          type="number"
          min="1"
          max="100"
          onChange={onChange}
        />{" "}
        <ButtonCount onClick={() => setCount(count + 1)}> + </ButtonCount>{" "}
      </DivWrapper>{" "}
    </CountWrapper>
  );
}
