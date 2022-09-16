import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cacaca;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: #ffffff;
  width: 50%;
  max-width: 300px;

  padding: 5px;
  border-radius: 10px;

  background: linear-gradient(
    180deg,
    rgba(158 158 253) 28%,
    rgba(205, 205, 205, 1) 53%,
    rgba(0, 170, 240, 1) 78%
  );
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
