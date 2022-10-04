import { useNavigation } from "@react-navigation/native";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { Colors } from "../../constant/colors";
import PlaceItem from "./PlaceItem";

function PlacesList({ places }) {
    const navigation = useNavigation();

    function selectPlace(id) {
        navigation.navigate("PlaceDetails", {
            placeId: id
        });
    }

    if (!places || places.length === 0) {
        return <View style={styles.fallbackcontainer}>
            <Text style={styles.fallbackText}>No places Added yet </Text>
        </View>
    }
    return (
        <FlatList
            style={styles.list}
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={
                ({ itemData }) => <PlaceItem place={itemData} onSelect={selectPlace} />
            }
        />
    )

}
export default PlacesList;

const styles = StyleSheet.create({
    list: {
        margin: 24,

    },
    fallbackcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    fallbackText: {
        fontSize: 16,
        color: Colors.primary200
    }
})