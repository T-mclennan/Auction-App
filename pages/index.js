// import {getFeaturedItems} from '../data/dummy-data';
// import ItemList from '../components/items/items-list'

// const featuredItems = getFeaturedItems();

// function HomePage() {
//   return (
//     <div>
//       <ItemList items={featuredItems} />
//     </div> 
//   )
// }

// export default HomePage;


import { useAuth } from '../lib/auth';
import Link from 'next/link';
import { useEffect } from 'react';

export default function HomePage() {
  const { auth, signOut, signInWithGoogle } = useAuth();

  return (
    <div>
      {auth ? (
        <div>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <button onClick={() => signInWithGoogle()}>Sign In</button>
      )}
    </div>
  );
}
