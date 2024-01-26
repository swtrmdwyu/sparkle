import styled from "styled-components";

const StyledInput = styled.input<Props>`
    border: none;
    border-radius: 15px;
    box-shadow: 0 0 0 2px rgba(0,0,0,0);
    font-family: $var(--text-font);
    height: ${(props: Props) => props.height ? props.height : '2.3rem'};
    width: ${(props: Props) => props.width ? `calc(${props.width} - 2rem)`: 'calc(100% - 2rem)'};
    padding: 0 1rem;
    outline: none;
    transition: box-shadow .3s ease; 

    &:focus {
        box-shadow: 0 0 0 2px var(--quartiary-color);
    }
`;

interface Props {
    type?: string,
    width?: string,
    height?: string,
    placeholder?: string
}

function Input({type, width, height, placeholder}: Props) {
    return (
        <StyledInput
            type={type}
            placeholder={placeholder}
            height={height}
            width={width}
        />
    );
}

export default Input;