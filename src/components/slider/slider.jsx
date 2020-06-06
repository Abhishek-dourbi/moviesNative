import React, {Component} from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import {sliderStyles} from './slider-styles';

class Slider extends Component {
  renderItem = ({item}) => {
      return (
          <View style={{width: 100, height: 200, marginRight: 10}}>
              <Image
                  style={{height: '100%'}}
                  source={{uri: item.image}}
                  resizeMode="contain"
              />
          </View>
      )
  };

  render() {
    const {title, data} = this.props;
    return (
      <View style={sliderStyles.container}>
        <Text style={sliderStyles.titleText}>{title}</Text>
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default Slider;
