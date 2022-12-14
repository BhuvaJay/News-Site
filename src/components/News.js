import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

function News(props) {

    const [loading, setloading] = useState(true)
    const [articles, setarticles] = useState([])
    const [page, setpage] = useState(1)
    const [results, setresults] = useState(100000)
    console.log(props.search)
    

    useEffect(()=>{
        setpage(1)
        setloading(true)
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api}&page=1&pagesize=9&q=${props.search}`)

            .then(response => {
                setloading(false)
                setarticles(articles => response.data.articles)
                setresults(response.data.totalResults)
                
            })
            .catch(error => {setarticles([])})
            
            document.title = `Top News | ${props.category} Headlines`
    },[props.category, props.search])

    useEffect(() => {
        if(page!==1) {
            axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api}&page=${page}&pagesize=9&q=${props.search}`)

                .then(response => {
                    setarticles(articles => articles.concat(response.data.articles))
                })
                .catch(error => {setarticles([])})
        }
    }, [page, props.search])

    
    let catg = props.category
    catg = catg[0].toUpperCase() + catg.substring(1)


    return (
        <div className="container" style={{marginTop:"4.5rem"}}>
            <h1 style={{marginTop:'5rem', marginBottom:'3rem'}} className='text-center'>Top {catg} Headlines for Today</h1>

            <InfiniteScroll
                dataLength = {articles.length} 
                next = {
                    ()=>{setpage(page+1)}
                }
                hasMore = {page<Math.ceil(results/9)}
                loader = {<Spinner/>}
            >
                <div className="container">
                    <div className="row">
                    {!loading && articles.map(article => {
                        return(
                            <div className="col-sm-4" key={article.url}>
                                <Newsitem article={article}/>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </InfiniteScroll>
           
        </div>
    )
}

export default News
