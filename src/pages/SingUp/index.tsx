import styled from "styled-components";
import Button from "../../components/Button";
import AuthForm from "../../components/AuthForm";
import Input from "../../components/Input";

const SingUpContainer = styled.div`
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

const DoubleInputContainer = styled.div`
    display: flex;
    gap: .6rem;
`;

function SingUp () {
    const submitButton = <Button>Criar Conta</Button>
    const link = <span>Já possui conta? <a href="#">Entrar.</a></span>;

    return (
        <SingUpContainer>
            <h1>Faça seu Cadastro</h1>
            <p>Por favor preencha seus dados para criarmos sua conta.</p>
            <AuthForm 
                submitButton={submitButton}
                link={link}
            >
                <DoubleInputContainer>
                    <Input 
                        height="3rem"
                        placeholder="Nome"
                        type="text"
                    />
                    <Input 
                        height="3rem"
                        placeholder="Sobrenome"
                        type="text"
                    />
                </DoubleInputContainer>
                <Input 
                    height="3rem"
                    placeholder="Data de Nascimento"
                    type="text"
                />
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
    </SingUpContainer>
    );
}

export default SingUp;