import styled from "styled-components";

const StyledButton = styled.button<Props>`
    align-items: center;
    border: ${(props: Props) => props.type === 'light' ? '2px solid var(--secondary-color)' : '2px solid var(--primary-color)'};
    border-radius: 15px;
    background-color: ${(props: Props) => props.type === 'light' ? 'var(--primary-color)' : 'var(--secondary-color)'};
    color: ${(props: Props) => props.type === 'light' ? 'var(--secondary-color)' : 'var(--primary-color)' };
    display: flex;
    font-size: .87rem;
    font-weight: 700;
    height: ${(props: Props) => props.height ? props.height : '2.9rem'};
    justify-content: center;
    padding: 1rem;
    text-transform: uppercase;
    width: ${(props: Props) => props.width ? props.width: '100%'};
    transition: width .3s ease-in-out;

    &:active {
        transform: scale(0.99);
    }

`;
interface Props {
    children?: React.ReactNode,
    height?: string
    type?: string,
    width?: string,
}

function Button({children, width, height, type}: Props) {
    return (
        <StyledButton
            width={width}
            height={height}
            type={type}
        >
            {children}
        </StyledButton>
    );
}

export default Button;