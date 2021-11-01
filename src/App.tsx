import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header/Header';
import Phone from './Phone/Phone';
import PhonesList from './PhonesList/PhonesList';
import Footer from './Footer/Footer';

function App() {
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
