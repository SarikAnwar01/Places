import { FlatList, Text, View, StyleSheet } from "react-native";
import PlaceItem from "./PlaceItem";

function PlacesList({ places }) {

    if (!places || places.length === 0) {
        return <View style={styles.fallbackcontainer}>
            <Text style={styles.fallbackText}>No places Added yet </Text>
        </View>
    }
    return (
        <FlatList
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={
                ({ itemData }) => <PlaceItem place={itemData} />
            }
        />
    )

}
export default PlacesList;

const styles = StyleSheet.create({
    fallbackcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    fallbackText: {
        fontSize: 16
    }
})