import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header/Header';
import Phone from './Phone/Phone';
import PhonesList from './PhonesList/PhonesList';
import Footer from './Footer/Footer';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/'>
                <PhonesList />
                </Route>
                <Route path='/phone'>
                <Phone />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
