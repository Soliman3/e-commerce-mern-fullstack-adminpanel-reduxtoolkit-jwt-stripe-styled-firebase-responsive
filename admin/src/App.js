import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import UserSinglePage from "./pages/UserSinglePage";
import NewUser from "./pages/NewUser";

// Styling..
const Container = styled.div``;
const Main = styled.div`
  display: flex;
`;
function App() {
  return (
    <Container>
      <BrowserRouter>
        <TopBar />
        <Main>
          <SideBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:id" element={<UserSinglePage />} />
            <Route path="/newuser" element={<NewUser />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </Container>
  );
}

export default App;
