import styled, { css } from "styled-components";
import { Link } from "react-router-dom"


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
    border-bottom: 1px solid ${({ theme }) => theme.color.gallery};

    ${({ hidden }) => hidden && css`
        display: none;
    `}
    
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.color.tiber};
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        filter: brightness(110%);
        }

    &:active {
        filter: brightness(120%);
        }
`;


export const Button = styled.button`
    border: none;
    color: ${({ theme }) => theme.color.white};
    width: 30px;
    height: 30px;
    padding: 0px;
    transition: filter 0.3s;

    ${({ toggleDone }) => toggleDone && css`
    background-color: ${({ theme }) => theme.color.forestGreen};
    `}

    ${({ remove }) => remove && css`
    background-color: ${({ theme }) => theme.color.mexicanRed};
    `}
    
    &:hover {
        filter: brightness(110%);
        }

    &:active {
        filter: brightness(120%);
        }
    
`;


