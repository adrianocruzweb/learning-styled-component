import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  import { Feed } from "./pages/Feed";
  
  import { Home } from './pages/Home'
  import { Login } from './pages/Login'
  import { Cadastro } from './pages/Cadastro'
  import { GlobalStyle } from './global';
  
  function App() {
    return (
      <Router>
       <GlobalStyle />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/cadastro" element={<Cadastro />} />
       </Routes >
      </Router>
    );
  }
  
  export default App;