import styled from "styled-components";

const StyledButton = styled.button<Props>`
    align-items: center;
    border: ${(props: Props) => props.style === 'light' ? '2px solid var(--secondary-color)' : '2px solid var(--primary-color)'};
    border-radius: 15px;
    background-color: ${(props: Props) => props.style === 'light' ? 'var(--primary-color)' : 'var(--secondary-color)'};
    color: ${(props: Props) => props.style === 'light' ? 'var(--secondary-color)' : 'var(--primary-color)' };
    display: flex;
    font-size: .87rem;
    font-weight: 700;
    height: ${(props: Props) => props.height ? props.height : '3rem'};
    justify-content: center;
    opacity: .9;
    padding: 1rem;
    text-transform: uppercase;
    width: ${(props: Props) => props.width ? props.width: '100%'};

    &:active {
        transform: scale(0.99);
    }

`;
interface Props {
    children?: React.ReactNode,
    height?: string
    style?: string,
    width?: string,
}

function Button({children, width, height, style}: Props) {
    return (
        <StyledButton
            width={width}
            height={height}
            style={style}
        >
            {children}
        </StyledButton>
    );
}

export default Button;