import './App.scss';
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import About from "./Components/About/About"
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects"
import Navbar from "./Components/Navbar/Navbar"


function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Footer></Footer>
    </div>
  );
}

export default App;
