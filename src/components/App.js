import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Homepage from "./Homepage";
import styled from "styled-components";
import Contact from "./Contact";
import Experience from "./Experience";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <MainContainer>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<h1>Im the project page</h1>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
};

export default App;

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: fit-content;
  background-image: url("/assets/styleImages/WebsiteBg.jpg");
  background-repeat: repeat;
  background-position: center center;
  background-size: cover;
`;
