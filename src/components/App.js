import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Homepage from "./Homepage";
import styled from "styled-components";
import Contact from "./Contact";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/experience" element={<h1>Im the experience page</h1>} />
          <Route path="/project" element={<h1>Im the project page</h1>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
};

export default App;

const MainContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 5em);
  background-image: url("/assets/styleImages/WebsiteBg.jpg");
  background-position: center;
  background-size: cover;
  margin-top: 0;
`;
