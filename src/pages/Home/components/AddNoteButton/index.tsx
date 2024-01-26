import styled from "styled-components";
import SparkleIcon from "../../../../components/SparkleIcon";

const AddButton = styled.button`
    align-items: center;
    background-color: var(--secondary-color);
    box-shadow: 0px 0px 98px -24px rgba(0,0,0,0.75);
    border: none;
    border-radius: 50%;
    bottom: 1.5rem;
    display: flex;
    height: 3rem;
    justify-content: center;
    opacity: .9;
    position: fixed;
    right: 1.2rem;
    width: 3rem;
`;

function AddNoteButton() {
    return (
        <AddButton>
            <SparkleIcon 
                size="1.4rem"
                fill="var(--primary-color)"
            />
        </AddButton>
    );
}

export default AddNoteButton;