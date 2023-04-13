import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/Button';
import { News } from '../interface/News';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

interface SingleBookProps {
    news: News
}

const SingleNews = (props: SingleBookProps) => {

    const navigate = useNavigate()
    return (
        <Col xs={6} md={4} lg={3}>
            <Card style={{ width: '13rem', height: '20rem' }} className='my-2'>
                <Card.Img variant="top" src={props.news.imageUrl} height={130} />
                <Card.Body>
                    <Card.Title className='text-dark'>{props.news.title}</Card.Title>
                    {/* <Card.Text className='text-dark'>
                        {props.news.publishedAt}
                    </Card.Text> */}
                    <Link to={'/details/' + props.news.id} > <Button variant="primary">Vai alla notizia!</Button></Link>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default SingleNews