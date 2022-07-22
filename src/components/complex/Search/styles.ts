import styled from "styled-components";

export const FormSearch = styled.div `
  display: flex;  
  height: 4rem;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0rem .28rem 1.07rem #dfdfdf;
  border-radius: .71rem;
  .ant-form {
    display: grid;
    grid-template-columns: auto max-content;
    width: 100%;
    height: 100%;
    align-items: center;
  }
  .ant-form-item {
    margin: 0 .3rem;
  }
  .ant-input, .ant-btn-default {
    height: 3.57rem;
    border: none;
  }
  .ant-input {
    font-size: 1.2rem;
  }
  .ant-btn-default {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #FF5350;
    color: #fff;
    border-radius: .8rem;
    box-shadow: 0rem .28rem 1.07rem #FF5350;
  }
  .ant-btn-default:hover {
    color: #750000;
  }
  .ant-input:focus, .ant-btn-default:focus {
    box-shadow: none;
  }
`