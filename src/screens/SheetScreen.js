import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { List, ListItem, Icon, Button }    from 'react-native-elements';
import { connect }                         from 'react-redux';
import { updateChild }                     from 'children/src/actions';

class SheetScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'シート',
    }
  };

  resetSheet() {
    const child = this.props.children.reduce((carry, child) => child.id === this.props.selectedChild ? child : carry);
    child.point = 0;
    this.props.updateChild(child)
  }

  render() {
    return (
      <View>
        <List>
          { this.props.children.filter(child => child.id === this.props.selectedChild).map((child, i) => (
            <ListItem
              roundAvatar
              rightIcon={ ( <View /> ) }
              avatar={child.image ? {uri: child.image} : (<Icon name="accessibility" />)}
              key={i}
              title={child.name}
              subtitle={`${child.point}ポイント`}
              onPress={ () => this.props.navigation.navigate('ChildrenScreen') }
            />))
          }
        </List>
        <Button
          title='リセット'
          style={{ marginTop: 10 }}
          onPress={() => this.resetSheet()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  children:      state.children,
  selectedChild: state.selectedChild,
});

const mapDispatchToProps = {
  updateChild
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SheetScreen);
