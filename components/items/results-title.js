import Button from '../ui/button';
import classes from './results-title.module.css';

function ResultsTitle(props) {
  const { category } = props;

  return (
    <section className={classes.title}>
      <h1>Items in {category}</h1>
      <Button link='/items'>Show all items</Button>
    </section>
  );
}

export default ResultsTitle;
