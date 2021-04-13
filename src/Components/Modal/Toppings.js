import React from "react";
import styled from "styled-components";

const ToppingWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
  column-count: 2;
  column-gap: 15px;
`;

const ToppingLabel = styled.label`
  cursor: pointer;
  display: block;
`;

const ToppingCheckbox = styled.input`
  cursor: pointer;
  margin-top: 5px;
`;

const ToppingTitle = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 5px;
`;

export function Toppings({ toppings, checkToppings }) {
  return (
    <>
      <ToppingTitle>Toppings</ToppingTitle>
      <ToppingWrap>
        {toppings.map((item, i) => (
          <ToppingLabel key={i}>
            <ToppingCheckbox
              type="checkbox"
              checked={item.checked}
              onChange={() => checkToppings(i)}
            />
            {item.name}
          </ToppingLabel>
        ))}
      </ToppingWrap>
    </>
  );
}
