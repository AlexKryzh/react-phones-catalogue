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

function App() {
    const [appState] = useAppStore();
    console.log(appState);
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default App;
