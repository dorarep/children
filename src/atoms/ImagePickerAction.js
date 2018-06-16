import React                        from 'react';
import { TouchableHighlight }       from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import { connectActionSheet }       from '@expo/react-native-action-sheet';

@connectActionSheet
export default class ImagePickerAction extends React.Component {
  _onOpenActionSheet = async () => {
    const options = ['写真を選ぶ', '写真を撮る', 'キャンセル'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    this.props.showActionSheetWithOptions({
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        switch(buttonIndex) {
          case 0:
            return this._pickImage();
          case 1:
            return this._takePhoto();
        }
      });
  };

  _askPromise = async () => {
    const results = await Promise.all([
      Permissions.askAsync(Permissions.CAMERA),
      Permissions.askAsync(Permissions.CAMERA_ROLL)
    ]);
    if (results.some(({ status }) => status !== 'granted')) {
      Alert.alert('エラー', 'カメラにアクセスできませんでした。');
      return false;
    } else {
      return true;
    }
  };

  _pickImage = async () => {
    if (await this._askPromise()) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
      });

      if (!result.cancelled) {
        this.props.onSelected(result.uri);
      }
    }
  };

  _takePhoto = async () => {
    if (await this._askPromise()) {
      let result = await ImagePicker.launchCameraAsync();

      if (!result.cancelled) {
        this.props.onSelected(result.uri);
      }
    }
  };

  render() {
    return (
      <TouchableHighlight onPress={this._onOpenActionSheet}>
        {this.props.children}
      </TouchableHighlight>
    );
  }
}