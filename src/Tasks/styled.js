import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid rgb(236, 234, 234);

    ${({ hidden }) => hidden && css`
        display: none;
    `}
    
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;


export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0px;
    transition: filter 0.3s;

    ${({ toggleDone }) => toggleDone && css`
    background-color: hsl(120, 61%, 34%);
    `}

    ${({ remove }) => remove && css`
    background-color: hsl(0, 68%, 42%);
    `}
    
    &:hover {
        filter: brightness(110%);
        }

    &:active {
        filter: brightness(120%);
        }
    
`;


