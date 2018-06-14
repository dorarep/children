import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import { connect }              from 'react-redux';
import { executeTask }          from 'children/src/actions';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: '手伝うよ！',
      headerRight:
        <Icon
          iconStyle={{ marginRight: 10 }}
          name='add-box'
          color='#00aced'
          onPress={ () => navigation.navigate('TasksScreen') }
        />,
      headerLeft:
        <Icon
          iconStyle={{ marginLeft: 10 }}
          name='people'
          color='#00aced'
          onPress={ () => navigation.navigate('ChildrenScreen')}
        />,
    }
  };

  tasks() {
    return this.props.tasks.filter(task => task.childId === this.props.selectedChild).map(task => {
      task.work = this.props.works.reduce((carry, work) => work.id === task.workId ? work : carry);
      return task;
    }).sort((a, b) => a.order - b.order);
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
        <List>
          { this.tasks().map((task, i) => (
            <ListItem
              roundAvatar
              rightIcon={ ( <View /> ) }
              avatar={<Icon name={task.work.icon} />}
              key={i}
              title={task.work.name}
              subtitle={`${task.work.point}ポイント`}
              onPress={ () => this.props.executeTask(task, this.props.selectedChild) }
            />))
          }
        </List>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  selectedChild: state.selectedChild,
  children:      state.children,
  tasks:         state.tasks,
  works:         state.works,
});

const mapDispatchToProps = {
  executeTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
