import './styles.scss';
import Title from './components/titlepage/title';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginForm from "./components/login/loginform";
import "bootstrap/dist/css/bootstrap.min.css";
import GoodieCare from "./components/bakingInstructions/goodieCare";
import OrderForm from "./components/orderform/orderForm";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Title />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/baking-instructions" element={<GoodieCare />} />
                <Route path="/order-form" element={<OrderForm />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
