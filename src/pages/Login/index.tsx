import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AuthForm from "../../components/AuthForm";

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 4rem);
    justify-content: flex-end;
    width: 100%;

    h1 {
        font-size: 3rem;
        font-weight: 800;
        margin-bottom: .5rem;
        opacity: .8;
    }

    p {
        width: 85%;
        opacity: .6;
        margin-bottom: 3rem;
    }
`;


function Login() {
    const submitButton = <Button>Login</Button>
    const link = <span>Não possui conta? <a href="#">Criar.</a></span>;

    return (
        <LoginContainer>
            <h1>Faça seu Login</h1>
            <p>Estamos felizes em te ver! entre com os dados da sua conta.</p>
            <AuthForm
                submitButton={submitButton}
                link={link}
            >

                <Input
                    height="3rem"
                    placeholder="email"
                    type="email"
                />
                <Input
                    height="3rem"
                    placeholder="senha"
                    type="password"
                />
            </AuthForm>
        </LoginContainer>
    );
}

export default Login;