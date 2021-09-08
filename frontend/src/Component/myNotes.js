import { Button, Card, Badge, Accordion } from 'react-bootstrap';
import MainScreen from './MainScreen';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import notes from '../Data/notes';
import axios from 'axios';

const MyNotes = () => {
    const [notes, setNotes] = useState([]);

    const deleteHandler = (id) => {
        if (window.confrim("are you sure")) {

        }
    };

    const fetchNotes = async() => {
        const {data} = await axios.get('/api/notes');
        setNotes(data);

    };

    useEffect(() => {
        fetchNotes()
    },[])
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
            <Accordion key={note._id}>

            <Card  style={{
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
            }}> 
            <Accordion.Toggle as={Card.Text} variant="link" eventKey="0"> {note.title}</Accordion.Toggle></span>
                <div>

                    <Link to={`/note/${note._id}`}>
                    <Button>
                        Edit
                    </Button>
                    </Link>

                    <Button variant="danger" className="mx-2" onClick = {() => deleteHandler(note._id)}>
                        Delete
                    </Button>
                </div>                
            </Card.Header>
            <Accordion.Collapse eventKey = "0">
            <Card.Body>
            <h4>
                <Badge variant="success">
                    Category - {note.category}
                </Badge>
            </h4>
    <blockquote className="blockquote mb-0">
      <p>
        {note.content}
      </p>
      <footer className="blockquote-footer">
        Created on - 8-09-2021 
      </footer>
    </blockquote>
  </Card.Body>
      </Accordion.Collapse>

        </Card>
        </Accordion>


        ))
        }

        </MainScreen>

    );
}
export default MyNotes;