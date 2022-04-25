import { Flex, Text, Link } from 'vcc-ui';
import { ICar } from '../interface';
import useWindowWidth from '../utils/hooks';

interface ICarProps {
  car: ICar;
}

const CarCard = ({ car }: ICarProps) => {
  const { width } = useWindowWidth();

  return (
    <Flex
      extend={{
        paddingLeft: width > 1066 ? 12 : 8,
        paddingRight: width > 1066 ? 12 : 8,
      }}
    >
      <Flex extend={{ marginBottom: 15 }}>
        <Text
          variant="bates"
          subStyle="emphasis"
          extend={{
            color: '#707070',
          }}
        >
          {car.bodyType.toUpperCase()}
        </Text>
        <Flex
          extend={{
            flexDirection: width > 1066 ? 'row' : 'column',
          }}
        >
          <Text
            variant="amundsen"
            subStyle="emphasis"
            extend={{ marginRight: 5 }}
          >
            {car.modelName}{' '}
          </Text>
          <Text variant="columbus" extend={{ color: '#707070' }}>
            {car.modelType}
          </Text>
        </Flex>
      </Flex>
      <img src={car.imageUrl} alt="volvo-car" />
      <Flex
        extend={{
          marginTop: 15,
          paddingRight: 25,
          paddingLeft: 25,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <Link href={`/learn/${car.id}`} arrow="right">
          Learn
        </Link>
        <Link href={`/shop/${car.id}`} arrow="right">
          Shop
        </Link>
      </Flex>
    </Flex>
  );
};

export default CarCard;
