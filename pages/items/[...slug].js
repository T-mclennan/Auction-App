import { useRouter } from 'next/router';
import {getFilteredItems} from '../../data/dummy-data';
import ItemList from '../../components/items/items-list';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import ResultsTitle from '../../components/items/results-title';
import {Fragment} from 'react';

function FilteredItemsPage() {

  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">loading...</p>
  }

  const filterCategory = filterData[1];
  const filteredItems = getFilteredItems(filterCategory);

  if (!filteredItems || filteredItems.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No items were found for the category "{filterCategory}". Please select again.</p>
        </ErrorAlert>
        <Button link="/items">Show All Items</Button>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <ResultsTitle category={filterCategory}/>
      <ItemList items={filteredItems} />
    </Fragment>
  )
}

export default FilteredItemsPage;