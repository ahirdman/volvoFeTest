import { useRouter } from 'next/dist/client/router';

const Learn = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Learn about {id}</div>;
};

export default Learn;
