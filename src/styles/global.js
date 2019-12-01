import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: #12db89;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 16px 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    padding: 5px 10px;
  }

  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .Modal {
    position: fixed;
    top: 25%;
    left: 25%;
    right: 25%;
    background: #88edc4;
    padding: 10px;
    border: 2px solid #0e995d;

    h1 {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
    }

    p {
      padding: 20px 0;
    }

    div {
      margin-top: 10px;
      text-align: right;
    }

    button {
      margin-right: 10px;
    }

    button.submit-button {
      background: #0e995d;

      &:hover {
        background: ${darken(0.05, '#0e995d')};
      }
    }

    button.cancel-button {
      background: #f95e5a;
      
      &:hover {
        background: ${darken(0.05, '#f95e5a')};
      }
    }
  }
`;