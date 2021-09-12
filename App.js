// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React, {Component} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Alert,
//   Button,
//   TouchableOpacity,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import admob, {
//   MaxAdContentRating,
//   InterstitialAd,
//   AdEventType,
//   RewardedAd,
//   RewardedAdEventType,
//   BannerAd,
//   TestIds,
//   BannerAdSize,
//   AdMobRewarded,
// } from '@react-native-firebase/admob';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//     // Compulsory
//     admob()
//       .setRequestConfiguration({
//         // Update all future requests suitable for parental guidance
//         maxAdContentRating: MaxAdContentRating.PG,

//         // Indicates that you want your content treated as child-directed for purposes of COPPA.
//         tagForChildDirectedTreatment: true,

//         // Indicates that you want the ad request to be handled in a
//         // manner suitable for users under the age of consent.
//         tagForUnderAgeOfConsent: true,
//       })
//       .then(() => {
//         // Request config successfully set!
//       });
//     // ......

//     this.showInterstitialAd();
//     // this.showRewardedAd();

//     // <PublisherBanner
//     //   adSize="fullBanner"
//     //   adUnitID="your-admob-unit-id"
//     //   testDevices={[PublisherBanner.simulatorId]}
//     //   onAdFailedToLoad={error => console.error(error)}
//     //   onAppEvent={event => console.log(event.name, event.info)}
//     // />

//     // Display a rewarded ad
//     // AdMobRewarded.setAdUnitID('ca-app-pub-9152919921144751/4388798738');
//     // AdMobRewarded.requestAd().then(() => AdMobRewarded.showAd());

//     // PushNotification.configure({
//     //           // (optional) Called when Token is generated (iOS and Android)
//     //           onRegister: function(token) {
//     //             console.log("TOKEN:", token);
//     //           },

//     //           // (required) Called when a remote or local notification is opened or received
//     //           onNotification: function(notification) {
//     //             console.log("NOTIFICATION:", notification);

//     //             // process the notification here

//     //             // required on iOS only
//     //             notification.finish(PushNotificationIOS.FetchResult.NoData);
//     //           },
//     //           // Android only
//     //           senderID: "1090501687137",
//     //           // iOS only
//     //           permissions: {
//     //             alert: true,
//     //             badge: true,
//     //             sound: true
//     //           },
//     //           popInitialNotification: true,
//     //           requestPermissions: true
//     //         });
//   }

//   showInterstitialAd = () => {
//     // Create a new instance
//     const interstitialAd = InterstitialAd.createForAdRequest(
//       'ca-app-pub-9152919921144751/8982703763',
//     );
//     // Add event handlers
//     interstitialAd.onAdEvent((type, error) => {
//       if (type === AdEventType.LOADED) {
//         interstitialAd.show();
//       }
//     });
//     // Load a new advert
//     interstitialAd.load();
//   };

//   render() {
//     return (
//       <View
//         style={{
//           flex: 0,
//           marginTop: 1,
//           backgroundColor: 'transparent',
//           height: 70,
//         }}>
//         <Text> Testing Ads Are Working </Text>

//         <BannerAd
//           unitId={'ca-app-pub-8844441377786347/9864440900'}
//           size={BannerAdSize.SMART_BANNER}
//           requestOptions={{
//             requestNonPersonalizedAdsOnly: true,
//           }}
//           onAdLoaded={() => {
//             console.log('Advert loaded');
//           }}
//           onAdFailedToLoad={(error) => {
//             console.error('Advert failed to load: ', error);
//           }}
//         />
//         <TouchableOpacity style={styles.button} onPress={this.onPress}>
//           <Text>Press Here</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   headerStyle: {
//     justifyContent: 'center',
//     width: window.width,
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//   },
//   viewStyle: {
//     height: 60,
//     backgroundColor: 'white',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   titleStyle: {
//     fontWeight: 'bold',
//     color: 'white', //'#2A3990',
//     fontSize: 18,
//     fontFamily: 'UrduTypesetting',
//   },
//   iconView: {
//     flex: 0.1,
//     paddingRight: 5,
//   },
//   textView: {
//     flex: 0.9,
//     paddingLeft: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   notifyStyle: {
//     flex: 0.1,
//     height: 40,
//     alignItems: 'flex-start',
//     justifyContent: 'center',
//   },
//   iconStyle: {
//     width: 20,
//     height: 17,
//   },
//   buttonDimension: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 8,
//     width: 40,
//     height: 40,
//   },
//   iconMenuDimension: {
//     width: 25,
//     height: 20,
//   },
//   buttonNotificationDimention: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 10,
//     width: 40,
//     height: 40,
//   },
//   iconNotifyDimension: {
//     width: 30,
//     height: 25,
//     marginRight: 15,
//     resizeMode: 'contain',
//   },
//   notifyheaderStyle: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 120,
//   },
// });

// export default App;

import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import admob, {
  MaxAdContentRating,
  InterstitialAd,
  InterstitialAdType,
  AdEventType,
  RewardedAd,
  RewardedAdEventType,
  BannerAd,
  TestIds,
  BannerAdSize,
  AdMobRewarded,
} from '@react-native-firebase/admob';
const adUnitId1 = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-8844441377786347/9864440900';
const adUnitId2 = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-8844441377786347/8899677747';
const adUnitId3 = __DEV__
  ? TestIds.REWARDED
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const interstitial = InterstitialAd.createForAdRequest(adUnitId2, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

// InterstitialAd Funtion
function InterstitialAds() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const eventListener = interstitial.onAdEvent((type) => {
      if (type === AdEventType.LOADED) {
        setLoaded(true);
      }
    });

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return () => {
      eventListener();
    };
  }, []);

  // No advert ready to show yet
  if (!loaded) {
    return null;
  }

  return (
    <Button
    style = {{marginTop: 20 }}
      title="Show Interstitial"
      onPress={() => {
        interstitial.show();
      }}
    />
  );
}

// Rewarded Ad Funtion

const rewarded = RewardedAd.createForAdRequest(adUnitId3, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

function RewardAds() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const eventListener = rewarded.onAdEvent((type, error, reward) => {
      if (type === RewardedAdEventType.LOADED) {
        setLoaded(true);
      }

      if (type === RewardedAdEventType.EARNED_REWARD) {
        console.log('User earned reward of ', reward);
      }
    });

    // Start loading the rewarded ad straight away
    rewarded.load();

    // Unsubscribe from events on unmount
    return () => {
      eventListener();
    };
  }, []);

  // No advert ready to show yet
  if (!loaded) {
    return null;
  }

  return (
    <Button style ={{marginTop: 20 }}
      title="Show Rewarded Ad"
      onPress={() => {
        rewarded.show();
      }}
    />
  );
}

export default class ProductDetail extends Component {
  clickEventListener() {
    Alert.alert('Success', 'Product has been added to cart');
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    admob()
      .setRequestConfiguration({
        // Update all future requests suitable for parental guidance
        maxAdContentRating: MaxAdContentRating.PG,

        // Indicates that you want your content treated as child-directed for purposes of COPPA.
        tagForChildDirectedTreatment: true,

        // Indicates that you want the ad request to be handled in a
        // manner suitable for users under the age of consent.
        tagForUnderAgeOfConsent: true,
      })
      .then(() => {
        // Request config successfully set!
      });
  }

  render() {
    return (
      <View style={styles.container}>
       
       
       
        {/* Banner Ad */}
        <BannerAd
          unitId={'ca-app-pub-8844441377786347/9864440900'}
          size={BannerAdSize.SMART_BANNER}
          requestOptions={{
          requestNonPersonalizedAdsOnly: true,}}
          onAdLoaded={() => {
          console.log('Advert loaded');}}
          onAdFailedToLoad={(error) => {
          console.error('Advert failed to load: ', error);}}
/>



        <ScrollView>
          <View style={{alignItems: 'center', marginHorizontal: 30}}>
            <Image
              style={styles.productImg}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3v7KDJN7TAoJa5sFaPWcp1HX8JFcpF3z5K3ngz4L6kWoEP7Ca',
              }}
            />
          
          
          
            {/* Calling Interstitial Ads Function */}
           
            <InterstitialAds />
           
           
            <Text style={styles.name}>Super Soft T-Shirt</Text>
            <Text style={styles.price}>$ 12.22</Text>

            {/* Calling Interstitial Ads Function */}
            <RewardAds />



            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec
            </Text>
            {/* <Button title='Show Interstitial Ad' onPress ={()=> showInterstitialAd}/> */}
          </View>
          <View style={styles.starContainer}>
            <Image
              style={styles.star}
              source={{uri: 'https://img.icons8.com/color/40/000000/star.png'}}
            />
            <Image
              style={styles.star}
              source={{uri: 'https://img.icons8.com/color/40/000000/star.png'}}
            />
            <Image
              style={styles.star}
              source={{uri: 'https://img.icons8.com/color/40/000000/star.png'}}
            />
            <Image
              style={styles.star}
              source={{uri: 'https://img.icons8.com/color/40/000000/star.png'}}
            />
            <Image
              style={styles.star}
              source={{uri: 'https://img.icons8.com/color/40/000000/star.png'}}
            />
          </View>
          <View style={styles.contentColors}>
            <TouchableOpacity
              style={[
                styles.btnColor,
                {backgroundColor: '#00BFFF'},
              ]}></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnColor,
                {backgroundColor: '#FF1493'},
              ]}></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnColor,
                {backgroundColor: '#00CED1'},
              ]}></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnColor,
                {backgroundColor: '#228B22'},
              ]}></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnColor,
                {backgroundColor: '#20B2AA'},
              ]}></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnColor,
                {backgroundColor: '#FF4500'},
              ]}></TouchableOpacity>
          </View>

          <View style={styles.separator}></View>
        </ScrollView>
      
      {/* Banner Ad */}
        <BannerAd
          unitId={adUnitId1}
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: '#696969',
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentColors: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentSize: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: '#eeeeee',
    marginTop: 20,
    marginHorizontal: 30,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
});
