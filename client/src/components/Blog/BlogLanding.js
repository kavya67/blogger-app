import React from 'react'
import {Link} from 'react-router-dom'
import axios from '../../config/config';



class BlogLand extends React.Component{
    constructor(){
        super()
        this.state = {
            blogs:[]
        }
    }

    componentDidMount(){
        axios.get('/blog/list')
            .then(response=>{
                this.setState(()=>({
                    blogs: response.data
                }))
            })
    }
    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.blogs.map(blog=>{
                            return <li key = {blog._id}><Link to = {`/blog/show/${blog._id}`}>{blog.title}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}



export default BlogLand