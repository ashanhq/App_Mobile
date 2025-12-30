import React from 'react';
import { View, Button, Image } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

export default function CameraScreen() {
  const [photo, setPhoto] = React.useState(null);

  const openCamera = () => {
    launchCamera({ mediaType: 'photo' }, response => {
      if (!response.didCancel && response.assets) {
        setPhoto(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Take Photo" onPress={openCamera} />
      {photo && (
        <Image
          source={{ uri: photo }}
          style={{ width: 300, height: 300, marginTop: 10 }}
        />
      )}
    </View>
  );
}
