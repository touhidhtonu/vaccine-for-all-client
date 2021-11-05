import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import wilson from '../../../images/wilson.png';
import './Blogs.css'


const blogData = [
    {
        title : 'Check at least a doctor in a year for your immunity',
        description : 'While it could be tempting to consider these tests a measuring stick of your immune response — or lack thereof — researchers and doctors say your protection against the virus still can not be boiled down to antibody levels in a simple blood test.',
        author:'Dr. Touhid',
        authorImg : wilson,
        date : '30 December 2021'
    },
    {
        title : 'Exercise everyday to keep you healthy',
        description : 'Try to find the time for some regular, vigorous exercise for extra health and fitness benefits.',
        author:'Dr. Nokib',
        authorImg : wilson,
        date : '30 December 2021'
    },
    {
        title : 'Take vaccines in time',
        description : 'Vaccines are the best defense against infections that may have serious complications such as pneumonia, meningitis, cancer, and even death.',
        author:'Dr. Mahmudul',
        authorImg : wilson,
        date : '30 December 2021'
    },
]

const Blogs = () => {
    return (
       <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
               </div>
               <div className="card-deck mt-5 row">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;