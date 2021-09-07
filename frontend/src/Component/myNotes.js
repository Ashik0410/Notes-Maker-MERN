import { Button, Card } from 'react-bootstrap';
import MainScreen from './MainScreen';
import { Link } from 'react-router-dom';
import notes from '../Data/notes';

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
        {
        notes.map(note => (

            <Card key={note._id} style={{
                margin: 10
            }}>
            <Card.Header style={{
                display: "flex"
            }}>
                <span style={{
                color: "black",
                textDecoration: "none",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 18
            }}> {note.title}</span>
                <div>
                    <Button>
                        Edit
                    </Button>

                    <Button variant="danger" className="mx-2">
                        Delete
                    </Button>
                </div>                
            </Card.Header>
        </Card>

        ))
        }

        </MainScreen>

    );
}
export default myNotes;