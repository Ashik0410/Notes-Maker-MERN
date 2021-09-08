import Header from './Header';
import Footer from './Footer';
import Landing from './Component/LandingPage';
import { BrowserRouter, Route } from 'react-router-dom';
import MyNotes from './Component/myNotes';

function App() {
    return (
        <BrowserRouter>
        <div className="App">
        <Header />
        <main>
            <Route exact path="/" component={Landing} />
            <Route path="/mynotes" component={MyNotes} />
            </main>
        <Footer />
        </div>
        </BrowserRouter>
    );
}

export default App;
