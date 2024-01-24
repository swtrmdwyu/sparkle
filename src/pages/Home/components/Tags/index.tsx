import styled from "styled-components";

const TagsContainer = styled.div`
    margin-bottom: 1.2rem;
`;

const TagsList = styled.ul`
    display: flex;
    list-style: none;
    gap: .5rem;
`;

const Tag = styled.button`
        display: flex;
        align-items: center;
        background-color: transparent;
        border: 1px solid var(--secondary-color);
        border-radius: 15px;
        color: var(--secondary-color);
        font-weight: 800;
        height: 1.8rem;
        min-width: 3rem;
        padding: .5rem 1rem;
        opacity: .9;
`;

const ActiveTag = styled(Tag)`
    background-color: var(--secondary-color);
    color: var(--primary-color);
`;

function Tags() {
    return (
        <TagsContainer>
            <TagsList>
                <li>
                    <ActiveTag>Hoje</ActiveTag>
                </li>
                <li>
                    <Tag>Semana</Tag>
                </li>
                <li>
                    <Tag>Mês</Tag>
                </li>
            </TagsList>
        </TagsContainer>
    );
}

export default Tags;