import * as ImagePicker from 'expo-image-picker';
import { View, Image } from "react-native";
import { useState } from "react";
import OutlinedButton from '../UI/OutlinedButton';
function Demoimage() {
    const [uploadImage, setuploadImage] = useState()
    const openCamera = async () => {

        const result = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this app to access your photos!");

        } else {
            const result = await ImagePicker.launchCameraAsync();

            if (!result.cancelled) {
                setuploadImage(result.uri)
            }

            return result;
        }
    }

    return (
        <View>
            <Image source={{ uri: uploadImage }} />
            <OutlinedButton icon="camera" onPress={openCamera}>Take Image</OutlinedButton>
        </View>
    );
}
export default Demoimage;