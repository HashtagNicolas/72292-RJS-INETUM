import styled from '@emotion/styled';

interface BaseButtonProps { 
   children?: React.ReactNode;
   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
   disabled?: boolean;
   variant?: 'primary' | 'danger';
   size?: 'small' | 'medium' | 'large';
}

export const BaseButtonWrapper = styled.button<BaseButtonProps>`
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    color: white;
    margin: 5px;
    background-color: ${(props) => props.variant === 'primary' ? '#007bff' : '#dc3545'};
    transform: scale(1);
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
    &:active {
        transform: scale(0.95);
    }
    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
        opacity: 0.7;
        transform: scale(1);
    }
`;
