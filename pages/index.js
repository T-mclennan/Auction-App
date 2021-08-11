import {getFeaturedItems} from '../data/dummy-data';
import ItemList from '../components/items/items-list'

const featuredItems = getFeaturedItems();

function HomePage() {
  return (
    <div>
      <ItemList items={featuredItems} />
    </div> 
  )
}

export default HomePage;