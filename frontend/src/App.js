import './App.css';
import Header from './Header';
import Footer from './Footer';
import Landing from './Component/LandingPage';

function App() {
    return (
        <div className="App">
        <Header />
        <main>
        <Landing />
        </main>
        <Footer />
        </div>
    );
}

export default App;
