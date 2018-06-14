import React, { Component }              from 'react';
import { View }                          from 'react-native';
import { List, ListItem, Icon }          from 'react-native-elements'
import { connect }                       from 'react-redux';
import { deleteTask }                    from 'children/src/actions';
import Swipeout                          from 'react-native-swipeout';

class TasksScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'タスク管理',
      headerRight:
        <Icon
          iconStyle={{ marginRight: 10 }}
          name='add-box'
          color='#00aced'
          onPress={ () => navigation.navigate('WorksScreen') }
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
    const swipeout = (task) => [
      {
        text: '削除',
        onPress: () => this.props.deleteTask(task.id)
      }
    ];

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
            <Swipeout right={swipeout(task)} key={i} autoClose={true} backgroundColor='#fff'>
              <ListItem
                roundAvatar
                avatar={<Icon name={task.work.icon} />}
                title={task.work.name}
                subtitle={`${task.work.point}ポイント`}
              />
            </Swipeout>
          ))
          }
        </List>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  selectedChild: state.selectedChild,
  children:      state.children,
  tasks: state.tasks,
  works: state.works,
});

const mapDispatchToProps = {
  deleteTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksScreen);

