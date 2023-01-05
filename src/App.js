import './styles.scss';
import Title from './components/titlepage/title';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginForm from "./components/login/loginform";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Title />} />
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
