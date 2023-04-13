import styles from  './index.module.css'
import search from '../../../static/icons/search.svg'

const Search = () => {
  return (
    <form className={styles.search}>
      <input
        type='text'
        placeholder='Search...'
        className={styles['search__input']}
      />

      <button className='button button_search'>
        <img
          src={search}
          alt=""
          className={styles['search__icon']}
        />
      </button>
    </form>
  )
}

export default Search