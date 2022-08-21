import TopBar from "./components/TopBar";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";

// Styling..
const Container = styled.div`

`
const Main = styled.div`
  display: flex;
`
function App() {
  return (
    <Container>
      <TopBar />
      <Main>
        <SideBar />
        <Home />
      </Main>
    </Container>
  );
}

export default App;
