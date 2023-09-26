import { useEffect, useState } from "react";
import { useParams,  } from "react-router-dom";
import request from "../server";
import Hero from '../assets/images/Hero.png';

import '../css/Blog.scss';

const BlogPage = () => {
  const { blogId } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    fetchData();
  },[])

  const fetchData  = async () => {
    try{
      setLoading(true);
      let response = await request.get(`/post/${blogId}`);
      // let res = await request.get(`/post/${blogId}`);
      setData(response.data);
      setLoading(false);
    }catch(err){
      console.log(err);
    }
  }
  console.log(data);

  return <div className="blog">
    <div className="blog-item">
      {loading ? <h1>Loading...</h1>: 
        <>
          <img className="hero" src={Hero} alt="image" />
          <div className="full">
            <h1 className="name">{data.user ? data.user.first_name : ''}</h1>
            <h1 className="last-name">{data.user ? data.user.last_name : ''}</h1>
          </div>
          <h3 className="address">{data.user ? data.user.address : ''}</h3>
          <h1 className="desc">{data.category ? data.category.description : ''}</h1>

        </>
      }

      {/* {loading ? <h1>Loading...</h1> : 
        <>

        </>
      } */}
    </div>
  </div>;
};

export default BlogPage;
