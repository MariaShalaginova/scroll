import css from "./Main.module.css";
import React, { useState, useEffect } from 'react';
import PostItem from "../PostItem/PostItem";
import { useGetPostsQuery  } from "../../myApi";


function PostList()  {

  const [page, setPage] = useState(0);
  const { data, isFetching, isLoading, isError, error } = useGetPostsQuery(page);
  const posts = data || [];
  //console.log(posts)
    
  //скролл
  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
         console.log("Fetching more data...");
         setPage(page + 1);
      }
   };
    
    document.addEventListener("scroll", onScroll);

    return function () {
        document.removeEventListener("scroll", onScroll);
      };
  }, [page, isFetching]);
      
  //загрузка постов
  if (isLoading) {
    return <div className={css.loading}><h1>Loading...</h1></div>;
  }

  if (isError) {
    return <div>Error: {error.data}</div>;
  }
    
        
  return (
      <div className={css.container}>
        <h1>Список постов</h1>

            <div className={css.list}>
              {posts.map((item, index) => {
                  return <PostItem info={item} key={index} />;
              })}
            </div>

      </div>
    );
  };
  
export default PostList;