import { Container, Row } from "react-bootstrap";
import BoxDemo from "./BoxDemo";
import img01 from './images/slide-01.jpeg';

function PropsDemo() {

    let arr = [
        {
            title: 'First',
            descrip: 'First Description',
            img: img01
        },
        {
            title: 'Second',
            descrip: 'Second Description',
            img: img01
        },
        {
            title: 'Third',
            descrip: 'Third Description',
            img: img01
        },
        {
            title: 'Fourth',
            descrip: 'Fourth Description',
            img: img01
        },
        {
            title: 'Fifth',
            descrip: 'Fifth Description',
            img: img01
        },
        {
            title: 'Sixth',
            descrip: 'Sixth Description',
            img: img01
        }
    ];

    return (
        <>
            <Container>
                <Row>
                    {
                        arr.map((items) => {
                            return (
                                <BoxDemo data={items}></BoxDemo>
                            )

                        })
                    }
                </Row>
            </Container>

        </>
    );
}
export default PropsDemo;