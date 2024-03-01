import css from './SearchBox.module.css';
import toast from 'react-hot-toast';
import { GoSearch } from 'react-icons/go';

export const SearchBox = ({ onQuery, value, onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.query.value.trim() === '') {
      toast.error('Please type the name of the movie');
      return;
    }
    onQuery(e.target.query.value.trim());
    e.target.reset();
  };
  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="query"
          value={value}
          className={css.input}
          placeholder="Search movies"
          onChange={e => {
            onChange(e.target.value);
          }}
        />
        <button type="submit" className={css.button}>
          <GoSearch color="#591d65" size={20} />
        </button>
      </form>
    </div>
  );
};