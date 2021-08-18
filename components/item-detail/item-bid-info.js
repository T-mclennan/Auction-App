import classes from './item-bid-info.module.css';

function ItemBidInfo(props) {
  const { image, imageAlt, minBid, highestBid, measurements } = props;


  return (
    <section className={classes.info}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <li><p>Minimum Bid: {minBid}</p></li>
        <li><p>Highest Bid: {highestBid}</p></li>
        <li><p>Measurements: {measurements}</p></li>
      </ul>
    </section>
  );
}

export default ItemBidInfo;
