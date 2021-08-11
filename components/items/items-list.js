import Item from './item';
import classes from './items-list.module.css';

function ItemList(props) {
  const {items} = props;

  return (
    <ul className={classes.list}>
      {items.map((item => (
        <Item 
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          description={item.description}
          measurements={item.measurements}
          minBid={item.minBid}
          highestBid={item.highestBid}
        />
      )))}
    </ul>
  )
}

export default ItemList;