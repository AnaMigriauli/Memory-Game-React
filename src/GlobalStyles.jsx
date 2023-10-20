import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   *{
    margin:0 ;
    padding:0;
   box-sizing:border-box;
   
  };
  #root{
    display:flex;
    justify-content:center;
    height:100%;
  }
  
  body{
    
    font-family: 'Atkinson Hyperlegible', sans-serif;
  }
  @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@700&display=swap');

`;
