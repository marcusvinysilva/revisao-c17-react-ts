import styled from "styled-components";

export const Title = styled.h1`
  color: red;
  background: black;

  span {
    font-size: 12px;
  }
`;

export const TitleSmall = styled(Title)`
  color: blue;
  font-size: 16px;
`;
