import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60%;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-size: .78rem;
        font-weight: 500;
        margin: 0 1rem 0 auto;
        opacity: .8;
        
        a {
            color: var(--secondary-color);
        }
    }
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .7rem;
    margin: 3rem 0 1.5rem 0;
`;

interface Props {
    children: React.ReactNode,
    submitButton: React.ReactNode,
    link: React.ReactNode
}

function AuthForm({children, submitButton, link} : Props) {
    return (
        <StyledForm action="submit">
                <ContentContainer>
                    <InputContainer>
                        {children}
                    </InputContainer>
                    {link}
                </ContentContainer>
                {submitButton}
            </StyledForm>
    );
}

export default AuthForm;