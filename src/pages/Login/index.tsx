import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";

const LoginContainer = styled.div`
    height: calc(100vh - 4rem);
    width: 100%;
`;

function Login() {
    return (
        <LoginContainer>
            <h1>Faça seu Login</h1>
            <p>Estamos felizes em te ver! entre com os dados da sua conta</p>
            <form action="submit">
                <div>
                    <Input />
                    <Input />
                </div>
                <div>
                    <ul>
                        <li>
                            google
                        </li>
                        <li>
                            facebook
                        </li>
                        <li>
                            LinkedIn
                        </li>
                    </ul>
                </div>
                <Button>Login</Button>
            </form>
            

        </LoginContainer>
    );
}

export default Login;