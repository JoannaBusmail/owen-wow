import { Link } from 'react-router-dom';
import '../styles/components/movieDetailStyle.scss';

function MovieSceneDetail(props) {
  if (props.movieItem === undefined) {
    return <p>Escena no encontrada</p>;
  } else {
    return (
      <>
        <article className='detailContainer'>
          <img
            className='detailImg'
            alt={props.movieItem.movie}
            src={props.movieItem.poster}
          />
          <div className='containerText'>
            <h4>Película: {props.movieItem.movieName}</h4>
            <p>Frase WOW: {props.movieItem.fullLine}</p>
            <p>Director: {props.movieItem.director}</p>
            {
              <a href={props.movieItem.audio} target='_blank'>
                Escucha el WOW{' '}
              </a>
            }
          </div>
        </article>
        <Link className='back' to='/'>
          {' '}
          Volver
        </Link>
      </>
    );
  }
}

export default MovieSceneDetail;
