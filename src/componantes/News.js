import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResults] = useState(0);

  const NewsUpdate = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=85e4aa4571c3461c8bb2b98a86468aea&page=1&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parseData = await data.json();
    console.log(parseData);
    props.setProgress(80);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  
  useEffect(() => {
    document.title =` ${props.category} - Donkey News`
    NewsUpdate();
    // eslint-disable-next-line
  }, []) 

  const handelPreviousClick = async () => {
    setPage(page - 1);
    NewsUpdate();
  };

  const handelNextClick = async () => {
    setPage(page + 1);
    NewsUpdate();
  };

  return (
    <div className="container my-4">
      <h1 className="text-center" style={{ margin: "25px 0", marginTop: "80px" }}>
        News Donkey {props.category} Top-Headlines
      </h1>
      {loading && <Spinner />}
      <div className="row ">
        {!loading &&
          articles &&
          articles.map((Element) => {
            return (
              <div className="col-md-4" key={Element.url}>
                <NewsItem
                  title={Element.title ? Element.title : "".slice(0, 55)}
                  description={Element.description ? Element.description : "".slice(0, 50)}
                  imgUrl={Element.urlToImage}
                  newsUrl={Element.url}
                  author={Element.author}
                  date={Element.publishedAt}
                />
              </div>
            );
          })}
      </div>

      <div className="container d-flex justify-content-around pt-5">
        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handelPreviousClick}> &#8606; Previous </button>
        <button disabled={page + 1 > Math.ceil(totalResult / props.pageSize)} type="button" className="btn btn-dark" onClick={handelNextClick}>Next &#8608;</button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 9,
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
