import React from 'react';

const NewsList = (props) => {
    console.log(props, ' this is props');

    const newsList = props.news.map((article, i) => {
        return (
            <div>
                <li key={i}>
                    <h3>{article.title}</h3>
                    <h4>By {article.author}</h4>
                    <p>{article.description}</p>
                </li>
            </div>
        )
    })

    return (
        <div>
            <h1>Top Headlines</h1>
            <ul>
                {newsList}
            </ul>
        </div>
    )
}

export default NewsList;