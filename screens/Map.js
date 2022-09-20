import { useCallback, useLayoutEffect, useState } from "react";
import { StyleSheet, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";

function Map({ navigation }) {
    const [selectedLocation, setSelectedLocation] = useState();

    const region = {
        latitude: 26.4525,
        longitude: 87.2718,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };
    function selectLocationHandler(event) {
        const lat = event.nativeEvent.coordinate.latitude;
        const log = event.nativeEvent.coordinate.longitude;
        setSelectedLocation({
            lat: lat,
            log: log,
        });
    }

    const confirmLocation = useCallback(() => {
        if (!selectedLocation) {
            Alert.alert("No location picked", "pick loction first");
            return;
        }
        navigation.navigate("AddPlace", { pickedlat: selectedLocation.lat, pickedlog: selectedLocation.log });
    }, [navigation, selectedLocation]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ({ tintColor }) => <IconButton icon="save" size={24} color={tintColor} onPress={confirmLocation} />
        });
    }, [navigation, confirmLocation]);
    return (
        <MapView style={styles.map} initialRegion={region} onPress={selectLocationHandler}>
            {selectedLocation && (<Marker
                title="PickedLocation"
                coordinate={{ latitude: selectedLocation.lat, longitude: selectedLocation.log }} />)}
        </MapView>
    );
}
export default Map;

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
})