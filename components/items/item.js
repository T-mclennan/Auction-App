import classes from './item.module.css';
import Link from 'next/link';

function Item(props) {
  const {id, title, image, description, measurements, minBid, highestBid } = props;
  const viewLink = `/items/${id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div>
            <h4>{description}</h4>
            <h4>Measurements: {measurements}</h4>
            <h4>Minimum Bid: {minBid}</h4>
            <h4>Current Bid: {highestBid}</h4>
          </div>
        </div>
        <div classeName={classes.actions}>
          <Link href={viewLink}>View Item</Link>
        </div>
      </div>
    </li>
  )

}

export default Item;