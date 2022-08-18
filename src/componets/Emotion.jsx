/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
// @emotion/reactの書き方その1　scss
const containerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid blue;
`;

// @emotion/reactの書き方その2　インラインスタイル
const titleStyle = css({
  marginRight: "20px"
});

export const Emotion = () => {
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>styled emotion</p>
      <Button>fight!!</Button>
    </div>
  );
};

// @emotion/styledの書き方は、styled-componentsに似た書き方
const Button = styled.button`
  padding: 7px;
  font-size: 16px;
  background-color: khaki;
  border: none;
  &:hover {
    background-color: green;
  }
`;
