import React from 'react'
import './App.css'

class Quote extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data: '',
      quote:'',
      author:''
    }
  }
  
  componentDidMount(){
    this.generateQuote();
  }
  
  generateQuote = () => {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
 .then(response => response.json())
  .then(data => {
    this.setState({
      data: data,
      
    })
    console.log(data);
  })
    
  }
  
  handleClick = (e) => {
  const randomIndex = Math.floor(Math.random() * 102);   

    e.preventDefault()
    this.setState({
      quote: this.state.data.quotes[randomIndex].quote,
      author:this.state.data.quotes[randomIndex].author
      
    })
  }
  render(){
  return(
    <div id='quote-box' className='quote-box'>
      <div>
      <p id='text'>{this.state.quote}</p>
      <p id='author'>{this.state.author}</p>
      <p className='my-quote'>Wanna see a quote?</p>
      <button id='new-quote' onClick={this.handleClick} className='btn'>Generate  
      </button>
      
      <a id='tweet-quote' href='twitter.com/intent/tweet'><i class="fa fa-twitter" aria-hidden="true"></i></a>

      </div>
     
      
    </div>
    
  )
}
}

export default Quote;