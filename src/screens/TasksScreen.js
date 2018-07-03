import React, { Component }              from 'react';
import { View }                          from 'react-native';
import { List, ListItem, Icon }          from 'react-native-elements'
import { connect }                       from 'react-redux';
import { deleteTask }                    from 'children/src/actions';
import Swipeout                          from 'react-native-swipeout';
import SelectedChild                     from 'children/src/organisms/SelectedChild';
import AddIcon                           from 'children/src/atoms/AddIcon';
import { formatTasks }                   from 'children/src/util';

class TasksScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: '今日やること',
      headerRight:
        <AddIcon
          onPress={ () => navigation.navigate('WorksScreen') }
        />,
    }
  };

  render() {
    const swipeout = (task) => [
      {
        text: '削除',
        onPress: () => this.props.deleteTask(task.id)
      }
    ];

    return (
      <View>
        <SelectedChild
          children={this.props.children}
          selectedChild={this.props.selectedChild}
          onPress={ () => this.props.navigation.navigate('ChildrenScreen') } />
        <List>
          { formatTasks(this.props.tasks, this.props.selectedChild, this.props.works).map((task, i) => (
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

