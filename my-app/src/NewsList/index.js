import React from 'react';

const NewsList = (props) => {
    console.log(props, ' this is props');

    const newsList = props.news.map((article, i) => {
        return (
            <div>
                <li key={i}>
                    <h3 class="text-primary text-left">{article.title}</h3>
                    <h4 class="text-success text-left">By {article.author}</h4>
                    <p class="text-justify">{article.description}</p>
                </li>
            </div>
        )
    })

    return (
        <div class="container">
            <div class="row">
                <div class="col-auto">
                    <h1 class="text-left">Top Headlines</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-auto">
                    <ul>
                        {newsList}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NewsList;