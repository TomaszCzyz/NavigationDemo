/* eslint-disable comma-dangle */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IMapboxNavigationProps, MapboxNavigation } from "../nativeComponents/MapboxNavigation.tsx";

export const Navigation = (props: IMapboxNavigationProps) => {
    const { origin, destination } = props;

    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <MapboxNavigation
                    // showsEndOfRouteFeedback={true}
                    // shouldSimulateRoute={true}
                    origin={origin}
                    destination={destination}
                    onLocationChange={event => {
                        console.log('onLocationChange', event.nativeEvent);
                    }}
                    onRouteProgressChange={event => {
                        console.log('onRouteProgressChange', event.nativeEvent);
                    }}
                    onError={event => {
                        const { message } = event.nativeEvent!;
                        // eslint-disable-next-line no-alert
                        // alert(message);
                        console.log('message', message);
                        console.log('native event:', event);
                        console.log('native event:', JSON.stringify(event));
                    }}
                    onArrive={() => {
                        // eslint-disable-next-line no-alert
                        // alert('You have reached your destination');
                        console.log('You have reached your destination');
                    }}
                    onCancelNavigation={() => {
                        // alert('Cancelled navigation event');
                        console.log('Cancelled navigation event');
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
    },
    mapContainer: {
        flex: 1,
    },
});
