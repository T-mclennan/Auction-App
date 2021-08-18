import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getItemById } from '../../data/dummy-data';
import ItemSummary from '../../components/item-detail/item-summary';
import ItemBidInfo from '../../components/item-detail/item-bid-info';
import ItemContent from '../../components/item-detail/item-content';

function ItemDetailPage() {
  const router = useRouter();
  const itemId = router.query.itemId;

  const item = getItemById(itemId);
  if (!item) {
    return <p>No Item Found!</p>
  }
  
  const { image, minBid, highestBid, measurements, title, description} = item;
  return (
    <Fragment>
      <ItemSummary title={title}/>
      <ItemBidInfo image={image} minBid={minBid} highestBid={highestBid} measurements={measurements} imageAlt={title}/>
      <ItemContent>
        <p>{description}</p>
      </ItemContent>
    </Fragment>
  )
}

export default ItemDetailPage;