import React, { Component } from 'react';

import {
    Text,
    View,
    Button,
    Image,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    StatusBar
} from 'react-native';

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import Orientation from 'react-native-orientation';

import Dash from 'react-native-dash';

export default class MyHomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPortrait: true
        };
    }

    componentWillMount() {
        // The getOrientation method is async. It happens sometimes that
        // you need the orientation at the moment the JS runtime starts running on device.
        // `getInitialOrientation` returns directly because its a constant set at the
        // beginning of the JS runtime.

        const initial = Orientation.getInitialOrientation();
        if (initial === 'PORTRAIT') {
            // do something
            //console.warn("PROTRAIT");
            this.setState({
                isPortrait: true
            });
        } else {
            // do something else
            //console.warn("LANDSCAPE");
            this.setState({
                isPortrait: false
            })
        }
    }


    componentDidMount() {
        // this locks the view to Portrait Mode
        //Orientation.lockToPortrait();

        // this locks the view to Landscape Mode
        // Orientation.lockToLandscape();

        // this unlocks any previous locks to all Orientations
        // Orientation.unlockAllOrientations();

        Orientation.addOrientationListener(this._orientationDidChange);
    }


    _orientationDidChange = (orientation) => {
        if (orientation === 'PORTRAIT') {
            // do something with portrait layout
            //console.warn("PROTRAIT");
            this.setState({
                isPortrait: true
            });
        } else {
            // do something with landscape layout
            //console.warn("LANDSCAPE");
            this.setState({
                isPortrait: false
            });
        }
    }

    componentWillUnmount() {
        Orientation.getOrientation((err, orientation) => {
            console.log('Current Device Orientation: ${orientation}');
        })
    }



    static navigationOptions = ({ navigation }) => ({
        title: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../images/chaticon.png')}
                style={[styles.icon]}
            />
        ),
    });



    render() {
        return (
            <View style={styles.container}>

                <StatusBar
                    backgroundColor='#824cff'
                    barStyle='light-content'
                />

                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        zIndex: 1,
                        marginTop: verticalScale(15),
                        marginLeft: scale(12),
                    }}
                    onPress={() => this.props.navigation.openDrawer()}
                >
                    <Image
                        source={require('../images/tab_menu.png')}
                        style={styles.iconTab}
                    />

                </TouchableOpacity>



                <View style={{
                    flex: 2,
                    //backgroundColor: 'green',
                    //justifyContent: 'center',
                    //alignItems: 'center'
                }}>


                    <ImageBackground
                        source={require('../images/background.jpg')}
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                        <Image
                            source={require('../images/profile_pic.jpg')}
                            style={{
                                width: this.state.isPortrait == true ? 100 : 80,
                                height: this.state.isPortrait == true ? 100 : 80,
                                //marginTop: -25,
                                marginTop: this.state.isPortrait == true ? -25 : 10,
                                borderRadius: 35
                            }}
                        />

                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >

                            <Image
                                source={require('../images/boy.png')}
                                style={{
                                    width: 23,
                                    height: 18,
                                    marginTop: 7,
                                    marginRight: 1
                                }}
                            />


                            <Text
                                style={{
                                    fontSize: 18,
                                    marginTop: 2,
                                    color: 'white'
                                }}
                            >
                                Alexandra Lee
                      </Text>

                        </View>



                        <Text
                            style={{
                                color: 'white'
                            }}
                        >
                            23, Colorado
                      </Text>


                    </ImageBackground>


                </View>


                <View
                    style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        zIndex: 1,
                        marginTop: verticalScale(210),
                        marginLeft: scale(16),
                    }}
                    onPress={() => this.props.navigation.openDrawer()}
                >
                    <Image
                        source={require('../images/camera.png')}
                        style={{
                            width: 16,
                            height: 16,
                            marginTop: 2
                        }}
                    />

                    <Text style={{
                        color: 'white',
                        marginLeft: 5
                    }}>5 recent photos</Text>

                </View>


                <View style={{ flex: 3.6, backgroundColor: 'transparent' }}>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        marginHorizontal: 25,
                        marginTop: 50,
                        marginBottom: 5,
                        elevation: 5
                    }}>

                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            //backgroundColor: 'red',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            <Image
                                source={require('../images/gridimage1.png')}
                                style={{
                                    width: 30,
                                    height: 30,
                                    marginLeft: 0
                                }}
                            />

                            <Dash
                                dashGap={0}
                                dashColor='#BFC6CA'
                                style={{
                                    width: 1,
                                    height: 70,
                                    marginLeft: 10,
                                    flexDirection: 'column',
                                }} />
                        </View>

                        <View style={{
                            flex: 3.5,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                        }}>

                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: -10, marginBottom: 5 }}>About Lee</Text>

                            <Text style={{ color: '#BFC6CA', fontSize: 12 }}>
                                A common feature request from developers familiar with the
                                web is background-image.
                            </Text>

                        </View>

                    </View>




                    <View style={{
                        flex: 1.3,
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        marginHorizontal: 25,
                        marginTop: 10,
                        marginBottom: 5,
                        //padding: 4
                        elevation: 5
                    }}>

                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            //backgroundColor: 'red',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            <Image
                                source={require('../images/gridimage2.png')}
                                style={{
                                    width: 35,
                                    height: 35,
                                    marginLeft: 0
                                }}
                            />

                            <Dash
                                dashGap={0}
                                dashColor='#BFC6CA'
                                style={{
                                    width: 1,
                                    height: 100,
                                    marginLeft: 10,
                                    flexDirection: 'column'
                                }} />
                        </View>

                        <View style={{
                            flex: 3.5,
                            backgroundColor: 'white',
                            //justifyContent: 'center',
                        }}>

                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 5, marginTop: 8 }}>9 Social Friends</Text>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                backgroundColor: 'transparent',
                                height: 85,
                                width: '100%'
                            }}>

                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                                    <Image
                                        source={require('../images/profile1.jpg')}
                                        style={{
                                            width: 45,
                                            height: 45,
                                            marginTop: 0,
                                            borderRadius: 100
                                        }}
                                    />

                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        marginTop: 2,
                                    }}>
                                        Amy
                                    </Text>

                                </View>



                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                                    <Image
                                        source={require('../images/profile2.jpg')}
                                        style={{
                                            width: 45,
                                            height: 45,
                                            marginTop: 0,
                                            borderRadius: 100
                                        }}
                                    />

                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        marginTop: 2,
                                    }}>
                                        Amy
                                    </Text>

                                </View>

                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                                    <Image
                                        source={require('../images/profile3.jpg')}
                                        style={{
                                            width: 45,
                                            height: 45,
                                            marginTop: 0,
                                            borderRadius: 100
                                        }}
                                    />

                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        marginTop: 2,
                                    }}>
                                        Amy
                                    </Text>

                                </View>


                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                                    <Image
                                        source={require('../images/profile4.jpg')}
                                        style={{
                                            width: 45,
                                            height: 45,
                                            marginTop: 0,
                                            borderRadius: 100
                                        }}
                                    />

                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        marginTop: 2,
                                    }}>
                                        Amy
                                    </Text>

                                </View>



                            </View>

                            {/* <Text>
                                A common feature request from developers familiar with the
                                web is background-image.
                                </Text> */}

                        </View>

                    </View>




                    <View style={{
                        flex: 1.3,
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        marginHorizontal: 25,
                        marginTop: 10,
                        marginBottom: 20,
                        //padding: 4
                        elevation: 5
                    }}>

                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            //backgroundColor: 'red',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            <Image
                                source={require('../images/gridimage3.png')}
                                style={{
                                    width: 35,
                                    height: 35,
                                    marginLeft: 0
                                }}
                            />

                            <Dash
                                dashGap={0}
                                dashColor='#BFC6CA'
                                style={{
                                    width: 1,
                                    height: 100,
                                    marginLeft: 10,
                                    flexDirection: 'column'
                                }} />
                        </View>

                        <View style={{
                            flex: 3.5,
                            backgroundColor: 'white',
                            //justifyContent: 'center',
                        }}>

                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 5, marginTop: 8 }}>Mutual Interests</Text>

                            <View style={{
                                //flexDirection: 'row', 
                                //justifyContent: 'space-around', 
                                //alignItems: 'center', 
                                backgroundColor: 'transparent',
                                height: 85,
                                width: '100%'
                            }}>

                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'transparent' }}>

                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        marginTop: 2,
                                        backgroundColor: '#E0E4E7',
                                        paddingVertical: 8,
                                        paddingHorizontal: 15
                                    }}>
                                        Makeup
                                    </Text>

                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        marginTop: 2,
                                        backgroundColor: '#E0E4E7',
                                        paddingVertical: 8,
                                        paddingHorizontal: 15
                                    }}>
                                        Drawing
                                    </Text>

                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        marginTop: 2,
                                        backgroundColor: '#E0E4E7',
                                        paddingVertical: 8,
                                        paddingHorizontal: 15
                                    }}>
                                        Swimming
                                    </Text>

                                </View>



                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'transparent' }}>

                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        marginTop: 2,
                                        backgroundColor: '#E0E4E7',
                                        paddingVertical: 8,
                                        paddingHorizontal: 15
                                    }}>
                                        Air Travelling
                                    </Text>

                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        marginTop: 2,
                                        backgroundColor: '#E0E4E7',
                                        paddingVertical: 8,
                                        paddingHorizontal: 15
                                    }}>
                                        Hiking
                                    </Text>

                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        marginTop: 2,
                                        backgroundColor: '#E0E4E7',
                                        paddingVertical: 8,
                                        paddingHorizontal: 15
                                    }}>
                                        Food
                                    </Text>

                                </View>
                            
                        </View>

                    </View>

                </View>





            </View>

            <Image
                source={require('../images/heart.png')}
                style={[this.state.isPortrait == true ? styles.iconPortrait1 : styles.iconLandscape1]}
            />

            <Image
                source={require('../images/notiicon.png')}
                style={[this.state.isPortrait == true ? styles.iconPortrait2 : styles.iconLandscape2]}
            />

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'red'
    },
    icon: {
        width: 24,
        height: 24,
    },
    iconTab: {
        width: 30,
        height: 30,
        //   position: 'absolute',
        //   zIndex: 1,
        //   marginTop: verticalScale(15),
        //   marginLeft: scale(12),
    },
    iconPortrait1: {
        width: 60,
        height: 60,
        position: 'absolute',
        marginTop: verticalScale(210),
        marginLeft: scale(210),
    },
    iconLandscape1: {
        width: 60,
        height: 60,
        position: 'absolute',
        marginTop: verticalScale(100),
        marginLeft: scale(480),
    },
    iconPortrait2: {
        width: 60,
        height: 60,
        position: 'absolute',
        marginTop: verticalScale(210),
        marginLeft: scale(280),
    },
    iconLandscape2: {
        width: 60,
        height: 60,
        position: 'absolute',
        marginTop: verticalScale(100),
        marginLeft: scale(570),
    },
})