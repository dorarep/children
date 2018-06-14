import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Agenda }                       from 'react-native-calendars';
import { List, ListItem, Icon }         from 'react-native-elements';
import { connect }                      from 'react-redux';
import Swipeout                         from 'react-native-swipeout';
import { deleteTaskLog }                from 'children/src/actions';

class CalendarScreen extends Component {k
  render() {
    const swipeout = (taskLog) => [
      {
        text: '削除',
        onPress: () => this.props.deleteTaskLog(taskLog.taskLogId),
      }
    ];

    const getChild = (childId) => this.props.children.reduce((carry, child) => child.id === childId ? child : carry);

    return (
      <Agenda
        items={this.props.taskLogs}
        renderItem={(item, firstItemInDay) => (
          <Swipeout right={swipeout(item)} autoClose={true} backgroundColor='#fff'>
            <ListItem
              roundAvatar
              avatar={<Icon name={item.task.work.icon} />}
              title={item.task.work.name}
              subtitle={`${item.task.work.point}ポイント`}
              rightTitle={getChild(item.childId).name}
            />
          </Swipeout>
        )}
        renderEmptyDate={() => <View />}
        renderEmptyData={() => <View />}
        rowHasChanged={(r1, r2) => { return r1.id !== r2.id }}
      />
    );
  }
}

const mapStateToProps = state => ({
  children: state.children,
  taskLogs: state.taskLogs,
});

const mapDispatchToProps = {
  deleteTaskLog
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarScreen);
