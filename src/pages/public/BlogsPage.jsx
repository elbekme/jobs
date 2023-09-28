import { useEffect, useState } from 'react';
import '../../css/Blogs.scss'
import request from '../../server';
import All from '../../assets/images/all.png';

const BlogsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    fetchData();
  },[])

  const fetchData  = async () => {
    try{
      setLoading(true);
      const response = await request.get('/post');
      console.log(response.data.data);
      setData(response.data.data);
      setLoading(false);
    }catch(err){
      console.log(err);
    }
  }
  // console.log(data);


  return <div className='blogs'>
    <div className="blogs-item">
      <input type="text" placeholder='Searching...' />
        <h1>All posts</h1>
        
        {loading ? <h1>Loading...</h1> :
         <>
         {data.map((el,id) => 
           <div key={id} className="all-box">
            <div className="image-place">
              <img src={All} alt="" />
            </div>
            <div className="info">
              <h3>{el.category ? el.category.name : ''}</h3>
              <h5>{el.category ? el.category.description : ''}</h5>
            </div>
           </div>

         )}
         </>
      }

    </div>
  </div>;
};

export default BlogsPage;
