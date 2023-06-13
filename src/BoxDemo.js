import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function BoxDemo(props) {
    return (
        <>
            <Col md={4}>
                <Card style={{ width: '20rem', margin: "20px" }}>
                    <Card.Img variant="top" src={props.data.img} />
                    <Card.Body>
                        <Card.Title>{props.data.title}</Card.Title>
                        <Card.Text>
                            {props.data.descrip}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}
export default BoxDemo;