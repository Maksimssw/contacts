import {useState} from "react";

import styles from  './index.module.css'

const Search = (props) => {
  const {onGetSearch} = props
  const [text, setText] = useState('')

  const addChangeHandler = (event) => {
    setText(event.target.value)
    onGetSearch(event.target.value)
  }

  return (
    <div className={styles.search}>
      <input
        type='text'
        placeholder='Search...'
        value={text}
        onChange={addChangeHandler}
        className={styles['search__input']}
      />
    </div>
  )
}

export default Search