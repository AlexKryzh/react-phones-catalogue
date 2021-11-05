import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header/Header';
import Phone from './Phone/Phone';
import PhonesList from './PhonesList/PhonesList';
import Loading from './Loading/Loading';
import Messages from './Messages/Messages';
import Footer from './Footer/Footer';
import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <div className="app d-flex flex-column">
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <PhonesList />
                    </Route>
                    <Route path="/phone/:id">
                        <Phone />
                    </Route>
                </Switch>
                <Footer />
                <Loading />
                <Messages />
            </div>
        </BrowserRouter>
    );
}

export default App;
