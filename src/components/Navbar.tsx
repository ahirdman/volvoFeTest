import { useState, useEffect } from 'react';
import { TabNav, TabNavItem, Text } from 'vcc-ui';
import { availableBodyTypes, filterCars } from '../utils';
import { ICar } from '../interface';

interface INavProps {
  cars: ICar[];
  setFilter: (prevState: ICar[]) => void;
}

const Navbar = ({ cars, setFilter }: INavProps) => {
  const [active, setActive] = useState(0);
  const [bodyTypes, setBodyTypes] = useState<string[]>();

  useEffect(() => {
    setBodyTypes(availableBodyTypes(cars));
  }, [cars]);

  return (
    <TabNav enableLineTransition>
      <TabNavItem
        isActive={active === 0}
        onClick={() => {
          setActive(0);
          setFilter(cars);
        }}
      >
        <Text variant="kelly" subStyle="emphasis">
          All
        </Text>
      </TabNavItem>
      {bodyTypes &&
        bodyTypes.map((body: string, index: number) => {
          return (
            <TabNavItem
              key={body}
              isActive={active === index + 1}
              onClick={() => {
                setActive(index + 1);
                setFilter(filterCars(body, cars));
              }}
            >
              <Text variant="kelly" subStyle="emphasis">
                {body.toUpperCase()}
              </Text>
            </TabNavItem>
          );
        })}
    </TabNav>
  );
};

export default Navbar;
