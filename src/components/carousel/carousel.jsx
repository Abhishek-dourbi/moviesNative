import React from 'react';
import SnapCarousel from 'react-native-snap-carousel';
import {AppDimensions} from '../../utils/AppDimensions';
import {ImageBackground, View} from 'react-native';

class Carousel extends React.Component {
  renderItem = ({item}) => {
    return (
      <View>
        <ImageBackground
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
