import React, { Component }             from 'react';
import { View, Image, Dimensions }      from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { connect }                      from 'react-redux';
import { updateChild }                  from 'children/src/actions';
import ImagePickerAction                from 'children/src/atoms/ImagePickerAction';
import ChildImage                       from 'children/src/atoms/ChildImage';

class EditChildScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: '子供編集',
    }
  };

  componentWillMount() {
    this.setState({ child: this.props.navigation.state.params.child });
  }

  submit(child) {
    this.props.updateChild(child);
    this.props.navigation.goBack();
  }

  render() {
    const dimensions = Dimensions.get('window');
    const imageWidth = dimensions.width;

    return (
      <View>
        <ImagePickerAction
          onSelected={(picture) => {
            const child = Object.assign({}, this.state.child);
            child.picture = picture;
            this.setState({child})
          }}>
          <ChildImage picture={this.state.child.picture} style={{width: imageWidth, height: imageWidth}} />
        </ImagePickerAction>

        <FormLabel>名前</FormLabel>
        <FormInput
          value={this.state.child.name}
          onChangeText={(name) => {
            const child = Object.assign({}, this.state.child);
            child.name = name;
            this.setState({child})
          }}
        />
        <FormLabel>ポイント</FormLabel>
        <FormInput
          value={`${this.state.child.point}`}
          onChangeText={(point) => {
            const child = Object.assign({}, this.state.child);
            child.point = Number(point);
            this.setState({child})
          }}
        />

        <Button
          title='変更'
          onPress={() => this.submit(this.state.child)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  updateChild
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditChildScreen);
