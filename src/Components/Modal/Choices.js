import React from "react";
import styled from "styled-components";

const ChoiceWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
  column-count: 2;
  column-gap: 15px;
`;

const ChoiceRadio = styled.input`
  cursor: pointer;
  margin-top: 5px;
`;

const ChoiceLabel = styled.label`
  cursor: pointer;
  display: block;
`;

const ChoiceTitle = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 5px;
`;

export function Choices({ openItem, choice, changeChoices }) {
  return (
    <>
      <ChoiceTitle> Choose </ChoiceTitle>
      <ChoiceWrap>
        {openItem.choices.map((item, i) => (
          <ChoiceLabel key={i}>
            <ChoiceRadio
              type="radio"
              name="choices"
              checked={choice === item}
              value={item}
              onChange={changeChoices}
            />
            {item}
          </ChoiceLabel>
        ))}
      </ChoiceWrap>
    </>
  );
}
