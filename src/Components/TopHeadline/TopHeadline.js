import React, { useEffect, useState } from 'react';
import News from '../News/News';



const TopHeadline = () => {
    const [articles, setArticles] = useState([]);


    useEffect( () => {
        fetch ('https://newsapi.org/v2/top-headlines?country=us&apiKey=89703d6252d3468b97df4112793077c6')
        .then(res => res.json())
        .then (data => setArticles(data.articles))
    }, [])

    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map(article => <News article = {article} key = {article.url}></News>)
            }
        </div>
    );
};

export default TopHeadline;