// import clue from './clue.png';
import './LandingPage.css';
import { Container, Row, Button } from 'react-bootstrap';

const LandingPage = () => {
    return (
        <div className="main">
            <Container>
            <Row>
            <div className="intro-text">
                 <div>
                     <h1 className="title">
                         Welcome to Notes Maker
                     </h1>
                     <p className="sub-title">
                         one safe place for your Notes
                     </p>
                 </div>
                 <div className="button-container">
                 <a href="/login">
                     <Button size="lg" className="log-btn">
                         Login
                     </Button>
                     </a>
                    <a href="/login">
                     <Button size="lg" className="log-btn" variant="outline-primary">
                         Signup
                     </Button>
                     </a>
                 </div>
            </div>
            </Row>
            </Container>
        </div>
    );
}
export default LandingPage;