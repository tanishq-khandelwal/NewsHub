import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class news extends Component {

  static defaultProps = {
    category: 'general',
  };
  

  static propTypes={
    category:PropTypes.string,
    selectedCountry: PropTypes.string,
  }
  constructor(){
    super();
    console.log("hello I am a constructor from news component");
    this.state={
      articles:[],
      loading:true,
      page:1,
      totalResults:0
    }
  }

  async fetchNewsData(selectedCountry, category, page) {
    const url = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=${category}&apiKey=8690df63c7da48939a4c943a171ce6c1&page=${page}`;
    this.setState({ loading: true });
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      loading: false,
      page: page,
      totalResults:parsedData.totalResults
    });
  }

  async componentDidMount() {
    await this.fetchNewsData(this.props.selectedCountry, this.props.category, 1);
  }

  async componentDidUpdate(prevProps) {
    const { selectedCountry, category } = this.props;
    if (
      selectedCountry !== prevProps.selectedCountry ||
      category !== prevProps.category
    ) {
      await this.fetchNewsData(selectedCountry, category, 1);
    }
  }


    handleNextClick = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.selectedCountry}&category=${this.props.category}&apiKey=8690df63c7da48939a4c943a171ce6c1&page=${this.state.page + 1}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
    
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false
      });
    }
    
    handlePreviousClick = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.selectedCountry}&category=${this.props.category}&apiKey=8690df63c7da48939a4c943a171ce6c1&page=${this.state.page - 1}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
    
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading:false
      });
    }

    fetchMoreData = async () => {
      const articlesPerPage = 10; // Adjust as needed
const nextPage = this.state.page + 1;
const url = `https://newsapi.org/v2/top-headlines?country=${this.props.selectedCountry}&category=${this.props.category}&apiKey=8690df63c7da48939a4c943a171ce6c1&page=${this.state.nextPage}&pageSize=${articlesPerPage}`;
    
      this.setState({ loading: true });
    
      const data = await fetch(url);
      const parsedData = await data.json();
      console.log(parsedData);
    
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        
        page: nextPage,
        totalResults: parsedData.totalResults
      });
    };
    
    

  render() {
    return (
      
   <>
      <h1 className="text-center" style={{paddingBottom:"50 rem",paddingTop:"70px",color:"white"}}>Top Headlines</h1>
      {this.state.loading && <Spinner/>}

      <InfiniteScroll
  dataLength={this.state.articles.length}
  next={this.fetchMoreData}
  hasMore={this.state.articles.length!==this.state.totalResults}
  loader={<Spinner />}
>

        
  <div className="container">
      <div className="row my-6">
      {!this.state.loading && this.state.articles.map((element)=>{
        return <div className="col md-6" key={element.url}>
        <NewsItem title={element.title}
        description={element.description}
        imageUrl={element.urlToImage}
        author={element.author}
        publish={element.publishedAt?.slice(":")||" "}
        newsUrl={element.url}/>
        
        </div>
      })}
      </div>
      </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between my-3">
      <button disabled={this.state.page<=1} type="button" className="btn btn-outline-secondary" onClick={this.handlePreviousClick}>Previous</button>
      <button type="button" className="btn btn-outline-secondary" onClick={this.handleNextClick}>Next</button>
      </div> */}
   </>
    )
  }
}

export default news