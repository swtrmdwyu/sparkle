import styled from "styled-components";
import sparkle from '../../../../assets/svg/sparkle.svg';
import IDate from "../../../../interfaces/IDate";

const NoteContainer = styled.div`
    background-color: #FFFFFF;
    border-radius: 25px;
    box-shadow: 0px 0px 41px -23px rgba(0,0,0,0.08);
    display: flex;
    height: 12vh;
    max-height: 12vh;
    margin-bottom: 1rem;
    padding: 1.5rem;
    position: relative;
`;

const PreviewContainer = styled.div`
    img {
        width: .9rem;
    }

    h2 {
        font-size: 1.2rem;
        font-weight: 700;
        opacity: .7;
        margin-bottom:.5rem;
    }

    p {
        font-size: .9rem;
        margin-bottom: 1rem;
        max-height: 3.7rem;
    }
`;

const NoteDate = styled.span`
    font-family: var(--date-font);
    font-size: .7rem;
    position: absolute;
    bottom: 1rem;
    right: 1.5rem;
    opacity: .6;
    
`;

interface Props {
    title: string,
    content: string,
    date: IDate
}

function Note({title, content, date} : Props) {
    return (
        <NoteContainer>
            <PreviewContainer>
                <h2><img src={sparkle} /> {title}</h2>
                <p>{content}</p>
            </PreviewContainer>
            <NoteDate>{`${date.day} ${date.month.substring(0, 3)}, ${date.year}`}</NoteDate>
        </NoteContainer>
    );
}

export default Note;