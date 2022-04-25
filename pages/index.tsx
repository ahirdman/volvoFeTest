import { server } from '../config';
import { useState, useEffect } from 'react';
import CarList from '../src/components/CarList';
import Navbar from '../src/components/Navbar';
import { ICar } from '../src/interface';

interface IHomeProps {
  cars: ICar[];
}

const Home = ({ cars }: IHomeProps) => {
  const [filter, setFilter] = useState<ICar[]>();

  useEffect(() => {
    setFilter(cars);
  }, [cars]);

  return (
    <>
      <Navbar cars={cars} setFilter={setFilter} />
      {filter && <CarList filter={filter} />}
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/cars.json`);
  const cars = await res.json();
  return {
    props: {
      cars,
    },
  };
};

export default Home;
