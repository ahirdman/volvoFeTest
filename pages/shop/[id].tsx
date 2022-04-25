import { useRouter } from 'next/dist/client/router';

const Shop = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Shop {id}</div>;
};

export default Shop;
