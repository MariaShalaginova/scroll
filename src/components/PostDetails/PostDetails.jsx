import { Link } from 'react-router-dom';
import css from './PostDetails.module.css';
import Button from '../button/Button';
import { useLocation } from 'react-router-dom';

const PostDetails = (props) => {

    //передача данных о посте через Link и state
    const location = useLocation();
    const {info} = location.state;
    //console.log(info);

    return (

        <div className={css.wrapper}> 
            <p>{info.id}</p>
            <div className={css.header}> 
                <h2 className={css.title}>{info.title}</h2>
            </div>

           <div className={css.text}>
                <p>{info.body}</p>
            </div>
            <p>UserId: {info.userId}</p>
            <Button type="button"><Link to='/'>Назад</Link></Button>
        </div>

    )
}

export default PostDetails