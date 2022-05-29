import '../styles/components/movieSceneItemStyles.scss';
import { Link } from 'react-router-dom';

//Recibo por props solo los datos que quiero pintar  al carga la página

function movieSceneItem(props) {
  return (
    <Link to={`/movie/${props.movieItem.id}`}>
      <article className='list'>
        <img
          className='list__poster'
          alt={props.movieItem.movie}
          src={props.movieItem.poster}
        />
        <h4 className='list__title'>{props.movieItem.movieName}</h4>
        <p className='list__line'>{props.movieItem.fullLine}</p>
        <p className='list__year'>{props.movieItem.year}</p>
      </article>
    </Link>
  );
}

export default movieSceneItem;
