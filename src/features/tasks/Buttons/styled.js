import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

`;

export const Button = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.color.primaryColor};
    border: none;
    margin: 0 0 0 20px;
    transition: color 0.3s;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        filter: brightness(110%);
    };

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    };

`;
