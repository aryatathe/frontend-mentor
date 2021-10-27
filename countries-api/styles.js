import styled, {createGlobalStyle, keyframes} from "styled-components";

export const darkTheme={
    bg: "#202c37",
    text: "#ffffff",
    elements: "#2b3945",
    input: "#ffffff",
};

export const lightTheme={
    bg: "#fafafa",
    text: "#111517",
    elements: "#ffffff",
    input: "#858585",
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


export const GlobalStyle=createGlobalStyle`
    html{
        height: 100%;
    }
    body{
        margin: 0;
        background: ${props=>props.theme.bg};
        color: ${props=>props.theme.text};
        font-family: "Nunito Sans";
    }
    a, button, input, select{
        color: ${props=>props.theme.text};
        font-family: inherit;
        text-decoration: none;
        border: none;
    }
    button, input, select{
        background: transparent;
    }
    button{
        cursor: pointer;
    }
    input, select{
        outline: none;
    }
`;

export const Header=styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 24px 80px;
    box-sizing: border-box;
    background: ${props=>props.theme.elements};
    box-shadow: 0 0 3px 3px #00000010;
    h1{
        font-weight: 800;
        font-size: 24px;
        margin: 0;
    }
    button{
        font-weight: 600;
        font-size: 16px;
        &:hover{
            font-weight: 800;
        }
    }
    @media (max-width: 620px){
        padding: 30px 15px;
        h1{
            font-size: 14px;
        }
        button{
            font-size: 12px;
        }
    }
`;

export const Find=styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 50px 80px;
    box-sizing: border-box;
    @media (max-width: 620px){
        flex-direction: column;
        padding: 25px 15px 30px 15px;
    }
`;

export const SearchBox=styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    height: 60px;
    width: 50%;
    max-width: 480px;
    background: ${props=>props.theme.elements};
    border-radius: 5px;
    box-shadow: 0 0 3px 3px #00000010;
    i{
        margin: auto;
    }
    input{
        font-size: 14px;
        &::placeholder{
            color: inherit;
        }
    }
    @media (max-width: 620px){
        height: 50px;
        width: 100%;
        max-width: 600px;
        margin-bottom: 40px;
        input{
            font-size: 12px;
        }
    }
`
export const FilterBox=styled.div`
    position: relative;
    width: 200px;
    box-sizing: border-box;
    border-radius: 5px;
    background: ${props=>props.theme.elements};
    box-shadow: 0 0 3px 3px #00000010;
    button{
        font-size: 14px;
        text-align: left;
    }
    #select-main{
        width: 100%;
        height: 100%;
        padding: 0 35px 0 25px;
    }
    #drop{
        display: none;
    }
    #select-main:focus ~ #drop, #drop:hover{
        position: absolute;
        top: 65px;
        display: flex;
        flex-direction: column;
        width: 100%;
        box-shadow: 0 0 3px 3px #00000010;
        padding: 15px 0;
        border-radius: 5px;
        box-sizing: border-box;
        background: ${props=>props.theme.elements};
    }
    .option{
        margin: 5px 25px;
        padding: 0;
        &:hover{
            font-weight: 600;
        }
    }
    ::after{
        content: "▾";
        position: absolute;
        top: 15px;
        right: 10px;
        font-size: 25px;
        pointer-events: none;
    }
    @media (max-width: 620px){
        height: 50px;
        button{
            font-size: 12px;
        }
        ::after{
            top: 10px;
        }
    }
`;

export const Results=styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: -30px 50px 50px 50px;
    a{
        display: contents;
    }
    .card{
        box-shadow: 0 0 3px 3px #00000010;
        border-radius: 5px;
        margin: 30px;
        padding: 0 25px 45px 25px;
        flex: 1 1 0px;
        background: ${props=>props.theme.elements};
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            margin: 0 -25px;
            border-radius: 5px 5px 0 0;
            aspect-ratio: 16/9;
            img{
                min-width: 100%;
                min-height: 100%;
                object-fit: cover;
            }
        }
        h4{
            margin: 25px 0 15px 0;
            font-size: 18px;
            font-weight: 800;
        }
        p{
            font-size: 14px;
            font-weight: 300;
            margin: 5px 0;
            strong{
                font-weight: 600;
            }
        }
    }
    @media (max-width: 1160px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 900px){
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 620px){
        margin: -20px 15px 15px 15px;
        .card{
            margin: 20px;
        }
    }
    @media (max-width: 520px){
        grid-template-columns: 1fr;
        .card{
            margin: 20px 0 !important;
        }
    }
`;

export const Back=styled.button`
    height: 40px;
    width: 140px;
    box-shadow: 0 0 3px 3px #00000010;
    border-radius: 5px;
    margin: 80px;
    background: ${props=>props.theme.elements};
    font-size: 16px;
    i{
        margin-right: 10px;
    }
    &:hover{
        font-weight: 600;
    }
    @media (max-width: 620px){
        margin: 40px 30px 65px 30px;
    }
`;

export const Details=styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10%;
    margin: 0 80px;
    padding-bottom: 40px;
    img{
        width: 100% !important;
        margin: auto;
    }
    h2{
        margin: 0 0 20px 0;
        font-size: 30px;
        font-weight: 800;
    }
    p{
        font-size: 16px;
        font-weight: 300;
        margin: 0;
        strong{
            font-weight: 600;
        }
        &:nth-child(4){
            grid-area: 4/1/5/3;
        }
        &:nth-child(5){
            grid-area: 5/1/6/3;
        }
    }
    #text{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    #description{
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: repeat(5, auto);
        grid-auto-flow: column;
        grid-gap: 10px;
    }
    #border{
        margin-top: 40px;
        strong{
            margin-right: 5px;
        }
        button{
            height: 30px;
            min-width: 90px;
            box-shadow: 0 0 3px 3px #00000010;
            border-radius: 5px;
            padding: 0 10px;
            margin: 5px 10px 5px 0;
            background: ${props=>props.theme.elements};
            font-size: 16px;
            &:hover{
                font-weight: 600;
            }
        }
    }
    @media (max-width: 720px){
        p{
            margin: 5px;
            &:nth-child(5){
                margin-bottom: 50px;
            }
        }
        #border strong{
            display: block;
            font-size: 16px;
        }
        #description{
            display: block;
        }
        grid-template-columns: 1fr;
        grid-gap: 45px;
    }
    @media (max-width: 620px){
        margin: 0 30px;
        h2{
            font-size: 22px;
        }
        p{
            font-size: 14px;
        }
        #border button{
            font-size: 14px;
        }
    }
`;

export const Failed=styled.div`
    margin: 80px;
    text-align: center;
    font-size: 30px;
    @media (max-width: 620px){
        margin: 30px;
    }
`;

export const Loading=styled(Failed)`
    i{
        display: block;
        font-size: 60px;
        animation: ${rotate} 2s linear infinite;
    }
`;
