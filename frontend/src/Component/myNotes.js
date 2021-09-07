import { Button } from 'react-bootstrap';
import MainScreen from './MainScreen';
import { Link } from 'react-router-dom';

const myNotes = () => {
    return (
        <MainScreen title = "Welcome Back Ashik Hameed"> 
        <Link to="createnewnote">
            <Button style={{
            marginLeft: 10,
            marginBotttom: 6
        }} size="lg">
                Create New Note
            </Button>
        </Link>
        </MainScreen>

    );
}
export default myNotes;