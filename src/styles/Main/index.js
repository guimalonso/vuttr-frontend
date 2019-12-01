import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 778px;
  padding: 30px 10px;

  h1 {
    font-size: 60px;
    margin: 20px 0;
  }

  h2 {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

export const Controls = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 50%;

    input {
      border-radius: 4px;
      padding: 5px;
    }

    span {
      display: flex;
      align-items: center;

      input {
        margin-right: 5px;
      }
    }
  }

  button {
    background: #0e995d;
    margin: 5px 0 0;
    width: 80px;
    height: 42px;
    display: flex;
    justify-content: space-around;
    &:hover {
      background: ${darken(0.03, '#0e995d')};
    }
  }
`;

export const ToolList = styled.ul`
  li {
    padding: 10px 0;
  }
`;