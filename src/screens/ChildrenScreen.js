import React, { Component }                   from 'react';
import { ScrollView }                         from 'react-native';
import Swipeout                               from 'react-native-swipeout';
import { List, ListItem, Icon, Input }        from 'react-native-elements'
import { connect }                            from 'react-redux';
import { addChild, deleteChild, selectChild } from 'children/src/actions';
import ChildImage                             from 'children/src/atoms/ChildImage';

class ChildrenScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'こども管理',
      headerRight:
        <Icon
          iconStyle={{ marginRight: 10 }}
          name='add-box'
          color='#00aced'
          onPress={ () => navigation.state.params.addChild() }
        />,
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({
      addChild: this.props.addChild,
    })
  }

  render() {
    const swipeout = (child) => [
      {
        text: '編集',
        onPress: () => { this.props.navigation.navigate('EditChildScreen', {child: child}) }
      },
      {
        text: '削除',
        onPress: () => this.props.deleteChild(child.id)
      }
    ];

    return (
      <ScrollView>
        <List>
          {
            this.props.children.map((child, i) => (
              <Swipeout right={swipeout(child)} key={i} autoClose={true} backgroundColor={this.props.selectedChild === child.id ? "#fff" : "#EEE"}>
                <ListItem
                  roundAvatar
                  avatar={<ChildImage picture={child.picture} style={{width: 64, height: 64}} />}
                  key={i}
                  title={child.name}
                  subtitle={`${child.point}ポイント`}
                  onPress={ () => {this.props.selectChild(child.id); this.props.navigation.goBack()} }
                />
              </Swipeout>
            ))
          }
        </List>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  children: state.children,
  selectedChild: state.selectedChild,
});

const mapDispatchToProps = {
  addChild, deleteChild, selectChild
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChildrenScreen);