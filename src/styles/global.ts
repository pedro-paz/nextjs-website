import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   
     
    
    body {
        color: ${({ theme }) => theme.fontColor};
        font-family: Nunito;                
        position: fixed;
        font-size:14px;
        margin: 0;        
        bottom: 0;
        right: 0;
        left: 0;
        top: 0;
    }
    

    body > #__next {
        height: 100%;
    }

    body > #__next > div {
        display: flex;
        height: 100%;
    }

    body * {
        
        box-sizing: border-box;        
        z-index:1;
    }

    

    .theme-animation {        
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        transition: 0.7s ease clip-path;
        clip-path: circle(0%);
    }

`;
