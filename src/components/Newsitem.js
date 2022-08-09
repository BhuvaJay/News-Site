import React from 'react'


function Newsitem(props) {
    let article = props.article
    
    
    
    return (
        
            <div className="shadow p-3 mb-5 bg-white rounded">
                <div className="card-body" style={{"overflow":"hidden"}}>

                    <img src={article.urlToImage ? article.urlToImage : "https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?b=1&k=20&m=1290904409&s=170667a&w=0&h=6khncht98kwYG-l7bdeWfBNs_GGcG1pDqzLb6ZXhh7I="} onError={(e)=>{e.target.onerror = null; e.target.src="https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?b=1&k=20&m=1290904409&s=170667a&w=0&h=6khncht98kwYG-l7bdeWfBNs_GGcG1pDqzLb6ZXhh7I="}} alt="Breaking News" style={{"marginBottom":"1.5rem", "maxWidth":"100%", "height":"auto"}}/>

                    <br></br>
                    <h5 className="card-title">{article.title}</h5>

                    <p className="card-text">{article.content ? article.content: "Click on Read More button to explore the news..."}</p>
                    
                    <div className="d-flex justify-content-end">
                        <a className="btn btn-primary" href={article.url} target="_blank" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
    )
}

export default Newsitem
