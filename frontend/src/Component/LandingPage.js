// import clue from './clue.png';
import './LandingPage.css';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                 <Link to="/login">
                     <Button size="lg" className="log-btn">
                         Login
                     </Button>
                </Link>
                 <Link to="/signup">

                     <Button size="lg" className="log-btn" variant="outline-primary">
                         Signup
                     </Button>
                </Link>
                 </div>
            </div>
            </Row>
            </Container>
        </div>
    );
}
export default LandingPage;