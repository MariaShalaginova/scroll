import React from "react";
import css from './PostItem.module.css'
import { Link } from "react-router-dom";
import Button from "../button/Button";

const PostItem = (props) => {
  const {info} = props;
  const truncatedContent = info.body.length > 100 ? info.body.substring(0, 100) + "..." : info.body;

  return (

    <div className= {css.post} key={info.id}>
      <p>{info.id}</p>
      <p className={css.title}>{info.title}</p>
      <p className={css.truncatedText}>{truncatedContent}</p>
      {info.body.length > 100 && (     
        <Button type="button"><Link to={`/post/${info.id}`}  state={{ info: info}}>Просмотр</Link></Button>
      )}
    </div>

    )
  };
  
export default PostItem;