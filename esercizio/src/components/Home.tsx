import { useState, useEffect } from 'react';
import { News } from '../interface/News';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/esm/Row';
import SingleNews from './SingleNews';

const Home = () => {

    const [news, setNews] = useState<News[]>([])

    const fetchNews = async () => {
        try {
            let response = await fetch(
                'https://api.spaceflightnewsapi.net/v3/articles')
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                setNews(data)
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
            <h1 className='my-4'>Ecco le news di oggi:</h1>
            <Row>
                {
                    news.map((news) => (
                        <SingleNews news={news} key={news.id} />))
                }
            </Row>
        </Container>
    );
}

export default Home;