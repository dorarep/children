import React, { Component }     from 'react';
import { View }                 from 'react-native';
import { List, ListItem, Icon, Button } from 'react-native-elements';
import { connect }              from 'react-redux';
import { executeTask }          from 'children/src/actions';
import AddIcon                  from 'children/src/atoms/AddIcon';
import Star                     from 'children/src/atoms/Star';
import SelectedChild            from 'children/src/organisms/SelectedChild';
import { formatTasks, isToday } from 'children/src/util';

class HomeScreen extends Component {
  state = {
    clickedTask: {},
  };

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

  _clickTask(task) {
    let clickedTask = Object.assign({}, this.state.clickedTask);
    clickedTask[task.id] = task;
    this.setState({clickedTask});
  }

  _executeTask() {
    Object.keys(this.state.clickedTask).forEach((id) => {
      this.props.executeTask(this.state.clickedTask[id], this.props.selectedChild)
    });
    this.setState({clickedTask: {}})
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
              rightIcon={ ( <Star isClicked={isToday(task.finishedDate)} onPress={() => isToday(task.finishedDate) ? null : this._clickTask(task)} /> ) }
              avatar={<Icon name={task.work.icon} />}
              key={i}
              title={task.work.name}
              subtitle={`${task.work.point}ポイント`}
            />))
          }
        </List>
        <Button
          primary1
          title='タスク完了'
          onPress={() => this._executeTask()}
          style={{marginTop: 30}}
        />
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
