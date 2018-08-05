import React, { Component } from 'react';
import NewsList from '../NewsList';

class MainContainer extends Component {
    constructor(){
        super();

        this.state = {
            news: []
        }
    }
    getNews = async () => {

        try {
            const news = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6a37c84016f545789a527ad6df4f531b');
            const newsJson = await news.json();
            console.log(newsJson, ' this is news');
            return newsJson;

        } catch (err) {
            console.log(err, 'error in catch block');
            return err;
        }
    }
    componentDidMount() {
        this.getNews().then((data) => {
            console.log(data, ' this is data');
            this.setState({news: data.articles});
            console.log(this.state.news, ' this is state.news after setState')
        })
    }
    render() {
        console.log(this.state.news, ' this is state.news')
        return (
            <div>
                <NewsList news={this.state.news} />
            </div>
        )
    }
};

export default MainContainer;