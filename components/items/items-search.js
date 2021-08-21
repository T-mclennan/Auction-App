import Button from '../ui/button';
import classes from './items-search.module.css'
import {useState} from 'react';

function ItemsSearch(props) {

  const [category, setCategory] = useState('Featured');

  function submitHandler(event) {
    event.preventDefault();
    console.log(`Selected ${category}`);
    props.onSearch(category);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="category">Category</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Featured">featured</option>
            <option value="Art">art</option>
            <option value="Garden">garden</option>
          </select>
        </div>
      </div>
      <Button>Find Items</Button>
    </form>
  )
}

export default ItemsSearch;