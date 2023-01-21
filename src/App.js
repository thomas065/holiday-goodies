import './styles.scss';
import Title from './components/titlepage/title';
import {HashRouter, Routes, Route} from 'react-router-dom';
import LoginForm from "./components/login/loginform";
import "bootstrap/dist/css/bootstrap.min.css";
import GoodieCare from "./components/bakingInstructions/goodieCare";
import OrderForm from "./components/orderform/orderForm";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/login" element={<LoginForm />} />
                <Route exact path="/baking-instructions" element={<GoodieCare />} />
                <Route exact path="/order-form" element={<OrderForm />} />
                <Route exact path="/" element={<Title />} />
            </Routes>
        </HashRouter>
    );
}
export default App;
