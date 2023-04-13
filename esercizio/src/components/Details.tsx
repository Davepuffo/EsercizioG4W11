import { useState, useEffect } from 'react';
import { News } from '../interface/News';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Details = () => {

    const params = useParams()
    console.log(params)

    const [articolo, setNewArticolo] = useState<News | null>(null)

    const fetchNews = async () => {
        try {
            let response = await fetch(
                'https://api.spaceflightnewsapi.net/v3/articles/' + params.IdNews)
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                setNewArticolo(data)
            } else {
                alert('Error!')
            }
        } catch (error) {
            console.log('Error', error)
        }
    }

    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <Container>
            <Card className='my-2'>
                <Card.Img variant="top" src={articolo?.imageUrl} height={330} />
                <Card.Body>
                    <Card.Title className='text-dark'>{articolo?.title}</Card.Title>
                    <Card.Text className='text-dark'>{articolo?.summary}
                    </Card.Text>
                    <Link to={'/'} > <Button variant="primary">Torna alla Home!</Button></Link>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Details;