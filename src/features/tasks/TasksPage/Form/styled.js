import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
       grid-template-columns: 1fr;
    }
    
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.gallery};
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.primaryColor};
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    box-shadow: 2px 2px 8px ${({ theme }) => theme.color.silver};
    
    border: none;
    transition: 0.3s;

    &:hover {
        filter: brightness(110%);;
        transform: scale(1.1);
    };

    &:active {
        filter: brightness(120%);;
    };

`;
