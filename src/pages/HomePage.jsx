import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

import Local from '../assets/images/local.png';
import 'swiper/css';
import '../css/Home.scss'
import request from '../server';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [popular,setPopular] =useState([]); 
  const [category,setCategory] =useState([]); 

  useEffect(() => {
    fetchData();
  },[])

  const fetchData  = async () => {
    try{
      let response = await request.get('/post/lastone');
      let res = await request.get('/post/lastones');
      let resCategory = await request.get('/category');
      setPopular(res.data);
      setData(response.data);
      setCategory(resCategory.data.data);
      console.log(resCategory.data.data);
    }catch(err){
      console.log(err);
    }
  }



  return <div className='home'>
    <div className="home-hero">
    <div className="header-item">
    <h5>{data.category ? data.category.name : ''}</h5>
    <h4>{data.category ? data.category.description : ''}</h4>
  <span>By <b> {data.user ? data.user.first_name : ''}</b> <b>{data.user ? data.user.last_name : ''}</b> {data.category ? data.category.createdAt : ''}</span>
  <p>{data.category ? data.category.description : ''}</p>
      <Link className='read-more' to={`blogs/${data._id}`}>
      <button>
        Read More
      </button>
      </Link>
    </div>
    </div>

    <div className="popular">
      <div className="popular-info">
        <h1>Popular blogs</h1>

        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {popular.map((el,id) => 
        <SwiperSlide key={id}>
          <Link className='popular-link' to={`blogs/${el._id}`}>
          <div className='popular-box'>
            <div className="popular-image_place">
            </div>
          <span>By <b> {el.user ? el.user.first_name : ''}</b> <b>{el.user ? el.user.last_name : ''}</b> {el.category ? el.category.createdAt : ''}</span>
          <h5>{el.category ? el.category.name : ''}</h5>
          <p>{el.category ? el.category.description : ''}</p>
          </div>
        </Link>
        </SwiperSlide>
      )}
    </Swiper>

      </div>
    </div>

    <div className="category">
      <div className="category-item">
        <h2>Choose A Catagory</h2>
        <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {category.map((ee,id) => 

        <SwiperSlide key={id}>
          <div className='category-box'>
            <div className="category-image_place">
              <img src={Local} alt="png" />
            </div>
          <h5>{ee.name}</h5>
          <p>{ee.description}</p>
          </div>
        </SwiperSlide>
      )}
    </Swiper>
      </div>
    </div>

  </div>;
};

export default HomePage;
