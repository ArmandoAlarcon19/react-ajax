import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Ajax extends Component{
  constructor(props){
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts').then(
      result => result.json()
    ).then(
      data => this.setState({
        articles: data
      })
    );

  }

  render(){
    return(
      <div>
      {
        this.state.articles.map((article)=> {
          return (
            <div className="card">
            <h1 style={{color:'#fff'}}>{article.title}</h1>
            <p style={{color:'#fff',fontSize:'25px'}}>{article.body}</p>
          </div>)
        })
      }
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Ajax />
    );
  }
}

render(<App />, document.getElementById('root'));
