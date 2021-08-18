import classes from './item-summary.module.css';

function ItemSummary(props) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default ItemSummary;