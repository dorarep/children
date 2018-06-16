import React, { Component }     from 'react';
import { View }                 from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import { connect }              from 'react-redux';
import { executeTask }          from 'children/src/actions';
import AddIcon                  from 'children/src/atoms/AddIcon';
import SelectedChild            from 'children/src/organisms/SelectedChild';
import { formatTasks }          from 'children/src/util';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: '手伝うよ！',
      headerRight:
        <AddIcon
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
        <SelectedChild
          children={this.props.children}
          selectedChild={this.props.selectedChild}
          onPress={ () => this.props.navigation.navigate('ChildrenScreen') } />
        <List>
          { formatTasks(this.props.tasks, this.props.selectedChild, this.props.works).map((task, i) => (
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
