import styled from "styled-components";
import SearchBar from "../../components/SearchBar";
import INote from "../../interfaces/INote";
import Header from "./components/Header";
import Note from "./components/Note";
import Tags from "./components/Tags";
import AddNoteButton from "./components/AddNoteButton";

const NotesContainer = styled.div`
    border-radius: 25px;
    max-height: 66vh;
    overflow-y: scroll;
`;
const Gap = styled.div`
    height: 5rem;
`;

function Home() {
    const notes: INote[] = [
        { id: "abc123", title: "Projeto de Equipe", date: { date: new Date(2024, 1, 24), day: 24, month: "Fev", year: 2024, weekday: "Segunda-feira" }, content: "Tivemos uma reunião produtiva para discutir os próximos passos do projeto. Cada membro compartilhou ideias e contribuições. Estamos animados com as perspectivas futuras!" },
        { id: "def456", title: "Desenvolvimento", date: { date: new Date(2024, 1, 25), day: 25, month: "Fev", year: 2024, weekday: "Terça-feira" }, content: "Hoje avançamos significativamente no projeto de desenvolvimento. Corrigimos alguns bugs e implementamos novos recursos. Estamos ansiosos para finalizar esta etapa nas próximas semanas." },
        { id: "ghi789", title: "Entrevista", date: { date: new Date(2024, 1, 26), day: 26, month: "Fev", year: 2024, weekday: "Quarta-feira" }, content: "Participei de uma entrevista de emprego hoje. Acredito que foi uma experiência positiva, e estou esperançoso em relação às possibilidades. Agora, aguardamos o feedback da empresa." },
        { id: "jkl012", title: "Yoga", date: { date: new Date(2024, 1, 27), day: 27, month: "Fev", year: 2024, weekday: "Quinta-feira" }, content: "Dediquei um tempo para praticar yoga hoje. Foi revigorante e ajudou a aliviar o estresse. Recomendo a prática regular de exercícios para manter um equilíbrio saudável." },
        { id: "mno345", title: "Planejamento", date: { date: new Date(2024, 1, 28), day: 28, month: "Fev", year: 2024, weekday: "Sexta-feira" }, content: "Comecei a planejar minha próxima viagem. Estou pesquisando destinos, acomodações e atividades. Mal posso esperar para explorar novos lugares e criar memórias incríveis." }
    ];

    return (
        <>
            <Header/>
            <SearchBar />
            <Tags />
            <NotesContainer>
                {notes.map((note: INote) => (
                    <Note 
                        key={note.id}
                        content={note.content}
                        date={note.date}
                        title={note.title}
                    />
                ))}
                <Gap />
            </NotesContainer>
            <AddNoteButton />
        </>
    )
}

export default Home;