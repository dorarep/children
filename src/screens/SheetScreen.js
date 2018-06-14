import React, { Component }                from 'react';
import { View }                            from 'react-native';
import { Button }                          from 'react-native-elements';
import { connect }                         from 'react-redux';
import { updateChild }                     from 'children/src/actions';
import SelectedChild                       from 'children/src/organisms/SelectedChild';

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
        <SelectedChild
          children={this.props.children}
          selectedChild={this.props.selectedChild}
          onPress={ () => this.props.navigation.navigate('ChildrenScreen') } />
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
