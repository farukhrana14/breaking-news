import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './News.css';

const News = (props) => {
    const {title, description, urlToImage, url} = props.article;
    return (

        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title href={url}>  {title}</Card.Title>
                <Card.Text>
                    <img src={urlToImage} alt=""/>
                    {description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

    );
};

export default News;