import React, { Component } from 'react'
import './NewsItem.css';

export default class NewsItem extends Component {

  render() {
    
    let{title,description,imageUrl,newsUrl,author,publish}=this.props
    return (
   
      <div><div className="card" style={{width:"18rem",height:"550px",borderRadius:"10px"}}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"86%",zIndex:"1"}}>{author}</span>
      {/* <img className="card-img-top" src={!imageUrl?"C:/Users/tanis/OneDrive/Desktop/React Projects/news-monkey/public/ news_image.jpg":imageUrl} alt="Card  cap"/> */}
      <img
  className="card-img-top"
  src={imageUrl || process.env.PUBLIC_URL + '/news_image.jpg'}
  alt="Card cap"
/>
      <div className="card-body">
        <h5 className="card-title">{title?.slice(0,100)||" "}</h5>
        <p className="card-text">{description?.slice(0,200)||" "}</p>
        <div className='bottom-card'>
        <a href={newsUrl} target='blank' className="btn btn-primary">Read More</a>
        <footer style={{marginTop:"10px",fontSize:"0.7rem"}}>{new Date(publish).toUTCString()}</footer>
        </div>
        </div>
    

      </div>
    </div>
    )
  }
}

