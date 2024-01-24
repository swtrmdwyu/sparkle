import styled from "styled-components"
import AppRoutes from "./Routes/AppRoutes"

const AppContainer = styled.div`
  padding: 2rem;
`;
function App() {

  return (
    <AppContainer>
      <AppRoutes />
    </AppContainer>
  )
}

export default App
