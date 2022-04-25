import CarCard from './CarCard';
import { Flex, View, Icon, Spacer, Card } from 'vcc-ui';
import { ICar } from '../interface';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel';
import useWindowWidth from '../utils/hooks';
import 'pure-react-carousel/dist/react-carousel.es.css';

interface ICarListProps {
  filter: ICar[];
}

const CarList = ({ filter }: ICarListProps) => {
  const { width } = useWindowWidth();

  return (
    <View
      style={{
        margin: 12,
        marginRight: width < 1066 ? 0 : 12,
      }}
    >
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={120}
        totalSlides={filter.length}
        visibleSlides={width > 1066 ? 4 : 1.28}
      >
        <Slider>
          {filter.map((car: ICar, index: number) => {
            return (
              <Slide index={index} key={car.id}>
                <CarCard car={car} />
              </Slide>
            );
          })}
        </Slider>
        {width > 1066 ? (
          <Flex
            extend={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              padding: 10,
            }}
          >
            <ButtonBack style={{ background: 'none', border: 'none' }}>
              <Icon type="media-previous-48" />
            </ButtonBack>
            <Spacer />
            <ButtonNext style={{ background: 'none', border: 'none' }}>
              <Icon type="media-next-48" />
            </ButtonNext>
          </Flex>
        ) : (
          <Flex>
            <DotGroup showAsSelectedForCurrentSlideOnly={true} />
          </Flex>
        )}
      </CarouselProvider>
    </View>
  );
};

export default CarList;
