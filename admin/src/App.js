import TopBar from "./components/TopBar";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import OtherPages from "./components/OtherPages";

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
        <OtherPages />
      </Main>
    </Container>
  );
}

export default App;
