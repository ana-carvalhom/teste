import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Corpo from './Corpo';
import FundoMobile from '../Fundo-mobile';

function App(){
    return (
        <div>
            <Navbar />
            <Corpo />
            <FundoMobile />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));