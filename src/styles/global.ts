import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   
     
    
    body {
        font-family: Nunito;
        margin: 0;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
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
        background: blue;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        transition: 0.5s ease clip-path;
        clip-path: circle(0%);
    }

`;
