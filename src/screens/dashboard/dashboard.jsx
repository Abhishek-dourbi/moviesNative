import React, {Component} from 'react';
import {Text, SafeAreaView, ScrollView} from 'react-native';
import {dashboardStyles} from './dashboard-styles';
import Carousel from '../../components/carousel/carousel';
import Slider from '../../components/slider/slider';

const data = [
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ec6f8f12d91113d70d55fd6',
    text: 'hello',
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5e4ef5fbe903a73d34a4c365',
    text: 'hello',
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ea1ed105e47c13d5388b605',
    text: 'hello',
  },
];

class Dashboard extends Component {
  render() {
    return (
      <SafeAreaView style={dashboardStyles.container}>
        <ScrollView>
          <Carousel data={data} />
          <Slider title={''} data={['hello']} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Dashboard;
