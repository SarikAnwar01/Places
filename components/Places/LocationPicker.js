import { StyleSheet, View, Alert, Image, Text } from "react-native";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location"
import { Colors } from "../../constant/colors";
import OutlinedButton from "../UI/OutlinedButton";
import { useEffect, useState } from "react";
import { getAddress, getMapPreview, MapBox } from "../../util/location";
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native";
function LocationPicker({ onPickLocation }) {
    const [userlocation, setUserLocation] = useState();
    const isFocused = useIsFocused();

    const navigation = useNavigation();
    const route = useRoute();

    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();



    useEffect(() => {
        if (isFocused && route.params) {

            const mapPickedLocation = { lat: route.params.pickedlat, log: route.params.pickedlog };
            setUserLocation(mapPickedLocation);
        }

    }, [route, isFocused])

    useEffect(() => {
        async function handleLocation() {

            if (userlocation) {
                const address = await getAddress(userlocation.lat, userlocation.lon)
                onPickLocation({ ...userlocation, address: address });
            }
        }
        handleLocation();

    }, [userlocation, onPickLocation])

    async function verifyPermissions() {
        if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }
        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert("permission Issue", "Provide permission");
            return false;
        }
        return true;

    }
    async function getLocationHandler() {
        const haspermission = await verifyPermissions();
        if (!haspermission) {
            return;
        }
        const location = await getCurrentPositionAsync();
        setUserLocation({
            lat: location.coords.latitude,
            lon: location.coords.longitude
        });



    }

    function pickOnMap() {
        navigation.navigate("Map");

    }

    let locationPreview = <Text>No Location</Text>;
    if (userlocation) {
        locationPreview = <Image style={styles.mapPreviewImage} source={{ uri: MapBox(userlocation.lat, userlocation.lon) }} />

    }

    return (
        <View>
            <View style={styles.mapPreview}>
                {locationPreview}
            </View>
            <View style={styles.actions}>
                <OutlinedButton icon="location" onPress={getLocationHandler}>Locate User</OutlinedButton>
                <OutlinedButton icon="map" onPress={pickOnMap}>Pick Location</OutlinedButton>
            </View>

        </View>
    );
}
export default LocationPicker;

const styles = StyleSheet.create({
    mapPreview: {
        width: "100%",
        height: 200,
        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: "hidden"
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    mapPreviewImage: {
        width: "100%",
        height: "100%",
        borderRadius: 4
    }
});