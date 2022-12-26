import './styles.scss';
import Title from './components/titlepage/title';
import Login from './components/login/login';
import Countdown from './components/countdown/countdown';

function App() {
    return (
        <div>
            <Title />
            <Countdown />
            {/*<Login />*/}
        </div>
    );
}
export default App;
