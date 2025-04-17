import styled from '@emotion/styled';

export const BaseHeaderWrapper = styled.div`
    background-color:${({onlineStatus}) => onlineStatus ? 'var(--strong-blue)' : 'var(--accent-red-dark)'}; 
    color:white;
    padding: 10px 20px;
    transition: background-color 0.3s ease-in-out;
`;
