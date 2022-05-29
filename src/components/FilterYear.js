import movieSceneItem from './MovieSceneItem';
import '../styles/components/filterStyles.scss';
function FilterYear(props) {
  const handleSelectOption = (ev) => {
    props.handleSearchYear(parseInt(ev.target.value));
  };
  const renderYears = () => {
    return props.years.map((theYear) => {
      return (
        <>
          <option className='filterValue' value={theYear}>
            {theYear}
          </option>
        </>
      );
    });
  };
  return (
    <>
      <label className='filterYear'> Year</label>
      <select
        className='filterSelect'
        name='year'
        onChange={handleSelectOption}
      >
        <option className='filterValue' value='all'>
          ALL
        </option>
        {renderYears()}
      </select>
    </>
  );
}
export default FilterYear;
