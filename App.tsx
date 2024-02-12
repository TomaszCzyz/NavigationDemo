import React, { useState } from 'react';
import { Button, PermissionsAndroid, SafeAreaView, StyleSheet, useColorScheme, View, } from 'react-native';

import { Colors, } from 'react-native/Libraries/NewAppScreen';
import { Navigation } from "./src/components/Navigation.tsx";

function App(): React.JSX.Element {
    const [showMap, setShowMap] = useState(false)
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                {
                    title: 'Cool Photo App gps Permission',
                    message:
                        'Cool Photo App needs access to your gps ',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the gps');
            } else {
                console.log('gps permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };
    const requestNotifPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
                {
                    title: 'POST_NOTIFICATIONS',
                    message:
                        'POST_NOTIFICATIONS',
                    buttonPositive: 'OK'
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('notif permission granted')
            }
        } catch (err) {
            console.warn(err);
        }
    };

    return (
        <SafeAreaView style={[backgroundStyle, { flex: 1 }]}>
            <View style={styles.page}>
                <Button title="showMap" onPress={() => setShowMap(prev => !prev)}/>
                <Button title="request permissions" onPress={requestCameraPermission}/>
                <Button title="request permissions" onPress={requestNotifPermission}/>
                {showMap && (
                    <View style={styles.container}>
                        {/*<MapView style={styles.map} />*/}
                        <Navigation
                            origin={[-0.097790, 51.511940]}
                            destination={[-0.103285, 51.5141540]}
                        />
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    container: {
        height: 600,
        width: 300,
        backgroundColor: "tomato"
    },
    map: {
        flex: 1
    }
});

export default App;
