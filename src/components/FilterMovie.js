import '../styles/components/filterStyles.scss';
function FilterMovie(props) {
  const handleInputSearchMovies = (ev) => {
    ev.preventDefault();
    props.handleSearchMovie(ev.target.value);
  };
  return (
    <>
      <label className='filterMovie' htmlFor=''>
        {' '}
        Movie:{' '}
      </label>
      <input
        className='filterInput'
        type='text'
        id=''
        value={props.searchMovie}
        onChange={handleInputSearchMovies}
      ></input>
    </>
  );
}
export default FilterMovie;
