import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getAllItems } from "../../data/dummy-data";
import ItemList from '../../components/items/items-list';
import ItemsSearch from '../../components/items/items-search';


function AllItemsPage() {
  const items = getAllItems();
  const router = useRouter();

  function findItemsHandler(category) {
    const fullPath = `/items/category/${category}`;
    router.push(fullPath);
  }


  return (
    <Fragment>
      <ItemsSearch onSearch={findItemsHandler} />
      <ItemList items={items} />
    </Fragment>
  )
}

export default AllItemsPage;