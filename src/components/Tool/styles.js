import styled from 'styled-components';

export const Container = styled.div`
  background: #cff9e6;
  border: 1px solid #0e995d;
  border-radius: 5px;
  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;

  a {
    color: #0e995d;
    font-size: 20px;
  }

  button {
    background: #f95e5a;
    width: 120px;
    padding: 5px 10px;
    display: flex;
    justify-content: space-around;

    &:hover {
      background: #cc4c4c;
    }
  }
`;

export const Content = styled.div`
  p {
    font-size: 15px;
    margin: 5px 0;
    display: flex;
    flex-wrap: wrap;

    span {
      font-weight: bold;
      margin-right: 5px;
    }

    span.tag-highlight {
      background: #ffdda1;
    }
  }
`;