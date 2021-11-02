import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header/Header';
import Phone from './Phone/Phone';
import { useAppStore } from './store';
import PhonesList from './PhonesList/PhonesList';
import Footer from './Footer/Footer';
import './App.scss';

function App() {
    const [appState] = useAppStore();
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
                { appState.isLoading && <span>LOADING</span> }
            </div>
        </BrowserRouter>
    );
}

export default App;
