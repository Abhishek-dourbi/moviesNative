import React from 'react';
import SnapCarousel from 'react-native-snap-carousel';
import {AppDimensions} from '../../utils/AppDimensions';
import {View, Image} from 'react-native';

class Carousel extends React.Component {
  renderItem = ({item}) => {
    return (
      <View>
        <Image
          style={{height: 200}}
          source={{uri: item.image}}
          resizeMode="cover"
        />
      </View>
    );
  };

  render() {
    const {data} = this.props;
    return (
      <SnapCarousel
        data={data}
        renderItem={this.renderItem}
        sliderWidth={AppDimensions.width}
        itemWidth={AppDimensions.width}
      />
    );
  }
}

export default Carousel;
