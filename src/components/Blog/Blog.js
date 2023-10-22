import React, { useState, useEffect } from 'react';
import './Blog.css';
import allBlogs from '../../fakeData/blog';
import BlogItem from '../BlogItem/BlogItem';

const Blog = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        setBlogs(allBlogs);
    }, []);

    return (
        <section className='features my-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='text-center mt-2 header-text'>Why You Chose Us!</h3>
                        <p className='mt-3 mb-5 text-center' style={{ color: 'grey' }}> Some reasons for choosing Tapau!
                        </p>
                    </div>
                </div>

                <div className='row'>
                    {
                        blogs.map(blog => <BlogItem key={blog.id} blog={blog}></BlogItem>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Blog;