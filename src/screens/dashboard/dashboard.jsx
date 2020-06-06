import React, {Component} from 'react';
import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import {dashboardStyles} from './dashboard-styles';
import Carousel from '../../components/carousel/carousel';
import Slider from '../../components/slider/slider';
import Colors from '../../utils/constants/Colors';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

const CarouselData = [
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

const TrendingData = [
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ed9031c686a580c72a17319'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ed0386dbf91430c6f56e0fc'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ec6b25b1e6eae3d681652ca'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5e925be731a4ff3d36309e68'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5eb42138bfc7423d48a2086e'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5e8f8fe2fe13c53d49b369e5'
  }
];

const DramaData = [
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5e82ae62413c7c3d6561e147'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5e7d23e5b975523d52070d32'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5e7005c2acd83a3d7340ad35'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5e4a80cdd43eb13d43d4aa6f'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5c4478b685f67d0d2fc6b5a8'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ce7bdd64b6aff0d8bdf5216'
  }
];

const YouthData = [
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5e6148a26518c13d5d662265'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ed0386dbf91430c6f56e0fc'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5e625a3878e6c63d700934f7'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5eb87f6dc88e6e3d3458c4ab'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5bc9c8063cd7ba758b15cb93'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5cc58d0f0745cb0d6551ce7e'
  }
];

const ComedyData = [
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5e7d23e5b975523d52070d32'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5e3c363907b03c3d6f75788d'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5e9e05fd9148c53d5a11f40f'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5e9bfe829148c53d5a0e616f'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5e4d5cb0d43eb13d43d63bc8'
  },
  {
    image: 'https://d1dfc9w6nzu9oi.cloudfront.net/5dc04e17fa23223bebdac076'
  }
];

class Dashboard extends Component {
  render() {
    return (
      <SafeAreaView style={dashboardStyles.container}>
        <ScrollView stickyHeaderIndices={[0]}>
          <View>
            <View style={{flex: 1, flexDirection: 'row', paddingVertical: 5, backgroundColor: Colors.Black,}}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start',}}>
                <Image style={{height: 40, width: 120}} resizeMode={'cover'} source={require('../../../assets/spLogo.png')} />
              </View>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: 20}}>
                <IoniconsIcon name={'ios-search'} size={25} color={'white'} />
              </View>
            </View>
          </View>
          <Carousel data={CarouselData} />
          <Slider title={'Trending'} data={TrendingData} />
          <Slider title={'Drama'} data={DramaData} />
          <Slider title={'Youth'} data={YouthData} />
          <Slider title={'Comedy'} data={ComedyData} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Dashboard;
