import React, { Component }                     from 'react';
import { View, ScrollView, TouchableHighlight } from 'react-native';
import { FormLabel, FormInput, Button, Icon }   from 'react-native-elements';
import { connect }                              from 'react-redux';
import { updateWork }                           from 'children/src/actions';

class EditWorkScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'やること編集',
    }
  };

  componentWillMount() {
    this.setState({ work: this.props.navigation.state.params.work });
  }

  submit(work) {
    this.props.updateWork(work);
    this.props.navigation.goBack();
  }

  render() {
    const icons = [
      'accessibility',
      'build',
      'face',
      'favorite',
    ];

    return (
      <View>
        <FormLabel>名前</FormLabel>
        <FormInput
          value={this.state.work.name}
          onChangeText={(name) => {
            const work = Object.assign({}, this.state.work);
            work.name = name;
            this.setState({work})
          }}
        />
        <FormLabel>アイコン</FormLabel>
        <ScrollView horizontal={true} style={{ paddingHorizontal: 20 }}>
          {icons.map((icon, i) => (
            <TouchableHighlight key={i} onPress={() => {
              const work = Object.assign({}, this.state.work);
              work.icon = icon;
              this.setState({work})
            }}>
              <Icon name={icon}
                    color={icon === this.state.work.icon ? '#f50' : '#517fa4'}/>
            </TouchableHighlight>
          ))}
        </ScrollView>
        <FormLabel>獲得ポイント</FormLabel>
        <FormInput
          value={`${this.state.work.point}`}
          onChangeText={(point) => {
            const work = Object.assign({}, this.state.work);
            work.point = Number(point);
            this.setState({work})
          }}
        />

        <Button
          title='変更'
          onPress={() => this.submit(this.state.work)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  updateWork
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditWorkScreen);
