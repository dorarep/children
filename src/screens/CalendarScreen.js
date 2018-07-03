import React, { Component }             from 'react';
import { View }                         from 'react-native';
import { Calendar }                     from 'react-native-calendars';
import { List, ListItem, Icon }         from 'react-native-elements';
import { connect }                      from 'react-redux';
import Swipeout                         from 'react-native-swipeout';
import { deleteTaskLog }                from 'children/src/actions';

class CalendarScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { dateString: '' }
  }

  formatTaskLog(taskLogs) {
    let formattedLogs = {};
    taskLogs.forEach((taskLog) => {
      formattedLogs[taskLog.date] = [taskLog].concat(formattedLogs[taskLog.date])
    });
    return formattedLogs
  }

  markedDates(taskLogs) {
    let markedDates = {};
    taskLogs.forEach((taskLog) => {
      markedDates[taskLog.date] = {
        marked: true,
        selected: this.state.dateString === taskLog.date
      }
    });
    return markedDates
  }

  selectedLogs(taskLogs) {
    return taskLogs.filter((taskLog) => taskLog.date === this.state.dateString)
  }

  render() {
    const swipeout = (taskLog) => [
      {
        text: '削除',
        onPress: () => this.props.deleteTaskLog(taskLog.taskLogId),
      }
    ];

    const getChild = (childId) => this.props.children.reduce((carry, child) => child.id === childId ? child : carry);

    return (
      <View>
        <Calendar
          onDayPress={(dateString) => { this.setState(dateString) }}
          markedDates={this.markedDates(this.props.taskLogs)}
        />
        <List>
          {this.selectedLogs(this.props.taskLogs).map((item) =>
          < Swipeout right={swipeout(item)} autoClose={true} backgroundColor='#fff'>
            <ListItem
            roundAvatar
            avatar={<Icon name={item.task.work.icon} />}
            title={item.task.work.name}
            subtitle={`${item.task.work.point}ポイント`}
            rightTitle={getChild(item.childId).name}
            />
            </Swipeout>
          )}
        </List>
      </View>
    );
    /*
     <Agenda
     items={this.formatTaskLog(this.props.taskLogs)}
     renderItem={(item, firstItemInDay) => (
     <View> { firstItemInDay ? <View /> :
     <Swipeout right={swipeout(item)} autoClose={true} backgroundColor='#fff'>
     <ListItem
     roundAvatar
     avatar={<Icon name={item.task.work.icon} />}
     title={item.task.work.name}
     subtitle={`${item.task.work.point}ポイント`}
     rightTitle={getChild(item.childId).name}
     />
     </Swipeout>
     } </View>
     )}
     renderEmptyDate={() => <View />}
     renderEmptyData={() => <View />}
     rowHasChanged={(r1, r2) => { return r1.id !== r2.id }}
     /> */
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
