import React, { Component } from 'react';

import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  ToolbarAndroid,
  ImageBackground,
  StatusBar,
  BackHandler
} from 'react-native';

export default class MyNotificationsScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../images/heart.png')}
        style={[styles.icon]}
      />
    ),
  });


  onActionSelected(position) {

    console.warn(position)
  }

  render() {

    return (
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'transparent' }}>

        <StatusBar
          backgroundColor='#824cff'
          barStyle='light-content'
        />

        <ToolbarAndroid
          style={{ height: 60, backgroundColor: '#956DEF', alignSelf: 'stretch' }}
          //logo={require('../images/chaticon.png')}
          title="Tour Book"
          titleColor="#FFF"
          actions={[
            { title: 'Setting 1', icon: require('../images/mobile.png'), show: 'always' },
            { title: 'Setting 2', icon: require('../images/picture.png'), show: 'always' },
            { title: 'Setting 3', icon: require('../images/show.png'), show: 'always' },
          ]}
          onActionSelected={this.onActionSelected}
        />

        <View style={{ flex: 1, backgroundColor: 'transparent', width: '100%', height: '100%' }}>

          {/* <Text>This is NOTIFICATION Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Go to home"
        /> */}

          <View style={{ flex: 1, height: '100%', backgroundColor: 'white', margin: 25, elevation: 15 }}>

            <View style={{ flex: 3, height: '100%', width: '100%', backgroundColor: 'transparent', elevation: 0 }}>

              <ImageBackground
                source={require('../images/nature_man.jpg')}
                style={{
                  flex: 2.5,
                  flexDirection: 'row',
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>

                <View style={{ flex: 1, justifyContent: 'flex-end', height: '100%', width: '100%', backgroundColor: 'transparent' }}>

                  <Text style={{ margin: 15, color: '#FFF', fontWeight: 'bold' }}>
                    <Text style={{ fontSize: 20 }}>
                      London trip
                    </Text>
                    {"\n"}
                    <Text>
                      The London eye
                    </Text>

                  </Text>

                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', height: '100%', width: '100%', backgroundColor: 'transparent' }}>

                  <Text style={{ margin: 15, color: '#FFF', fontWeight: 'bold' }}>
                    <Text style={{ fontSize: 15 }}>
                      August, 2016
                    </Text>

                  </Text>

                </View>

              </ImageBackground>

            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: '100%', width: '100%', backgroundColor: 'transparent' }}>

              <View style={{ flex: 2, flexDirection: 'row', height: '100%', width: '100%', backgroundColor: 'transparent' }}>

                <Text style={{ margin: 15, color: '#000', fontWeight: 'bold' }}>
                  <Text style={{ fontSize: 18 }}>
                    Denver London (LHR)
                    </Text>
                  {"\n"}
                  <Text>
                    35 photos + 6 videos
                    </Text>

                </Text>

              </View>

              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', height: '100%', width: '100%', backgroundColor: 'transparent' }}>

                <Image
                  style={{ width: 30, height: 35, marginRight: 5 }}
                  source={require('../images/threedots.png')}
                />

              </View>

            </View>

          </View>

          <View style={{ flex: 1, height: '100%', backgroundColor: 'white', elevation: 15, marginBottom: 25, marginLeft: 25, marginRight: 25 }}>

            <View style={{ flex: 3, height: '100%', width: '100%', backgroundColor: 'transparent', elevation: 0 }}>

              <ImageBackground
                source={require('../images/nature_man.jpg')}
                style={{
                  flex: 2.5,
                  flexDirection: 'row',
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>

                <View style={{ flex: 1, justifyContent: 'flex-end', height: '100%', width: '100%', backgroundColor: 'transparent' }}>

                  <Text style={{ margin: 15, color: '#FFF', fontWeight: 'bold' }}>
                    <Text style={{ fontSize: 20 }}>
                      London trip
                    </Text>
                    {"\n"}
                    <Text>
                      The London eye
                    </Text>

                  </Text>

                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', height: '100%', width: '100%', backgroundColor: 'transparent' }}>

                  <Text style={{ margin: 15, color: '#FFF', fontWeight: 'bold' }}>
                    <Text style={{ fontSize: 15 }}>
                      August, 2016
                    </Text>

                  </Text>

                </View>

              </ImageBackground>

            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: '100%', width: '100%', backgroundColor: 'transparent' }}>

              <View style={{ flex: 2, flexDirection: 'row', height: '100%', width: '100%', backgroundColor: 'transparent' }}>

                <Text style={{ margin: 15, color: '#000', fontWeight: 'bold' }}>
                  <Text style={{ fontSize: 18 }}>
                    Denver London (LHR)
                  </Text>
                  {"\n"}
                  <Text>
                    35 photos + 6 videos
                  </Text>

                </Text>

              </View>

              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', height: '100%', width: '100%', backgroundColor: 'transparent' }}>

                <Image
                  style={{ width: 30, height: 35, marginRight: 5 }}
                  source={require('../images/threedots.png')}
                />

              </View>

            </View>

          </View>

        </View>

        {/* <Text>This is NOTIFICATION Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Go to home"
        /> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
})