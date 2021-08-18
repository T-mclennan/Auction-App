import classes from './item-content.module.css';

function ItemContent(props) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default ItemContent;
