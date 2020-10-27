import React from "react";
import axios from "axios";
import Articles from "../components/Article";

import CustomForm from '../components/Form'


class ArticleList extends React.Component {
  state = {
    articles: []
  };

//axios fetch the data and returns the promise
  fetchArticles = () => {
    axios.get("http://127.0.0.1:8000/api/").then(res => {
      this.setState({
        articles: res.data
      });
    });
  }

//this is the important function
  componentDidMount() {
    this.fetchArticles();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchArticles();
    }
  }

  render() {
    return (
      <div>
        <Articles data={this.state.articles} /> <br />
        <h2>Create an Article</h2>
        <CustomForm requestType="post" articleID={null}/>
      </div>
    );
  }
}

export default ArticleList;