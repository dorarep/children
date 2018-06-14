import React, { Component }              from 'react';
import { List, ListItem, Icon }          from 'react-native-elements'
import { connect }                       from 'react-redux';
import Swipeout                          from 'react-native-swipeout';
import { addWork, deleteWork, addTask }  from 'children/src/actions';

class WorksScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: '仕事管理',
      headerRight:
        <Icon
          iconStyle={{ marginRight: 10 }}
          name='add-box'
          color='#00aced'
          onPress={ () => navigation.state.params.addWork() }
        />,
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({
      addWork: this.props.addWork,
    })
  }

  render() {
    const swipeout = (work) => [
      {
        text: '編集',
        onPress: () => { this.props.navigation.navigate('EditWorkScreen', {work: work}) }
      },
      {
        text: '削除',
        onPress: () => this.props.deleteWork(work.id)
      }
    ];

    return (
      <List>
        { this.props.works.map((work, i) => (
          <Swipeout right={swipeout(work)} key={i} autoClose={true} backgroundColor='#fff'>
            <ListItem
              roundAvatar
              avatar={(<Icon name={work.icon} />)}
              key={i}
              title={work.name}
              subtitle={`${work.point} ポイント`}
              onPress={ () => {
                this.props.addTask(work.id, this.props.selectedChild); this.props.navigation.goBack()
              } }
            />
          </Swipeout>
        ))
        }
      </List>
    );
  }
}

const mapStateToProps = state => ({
  works:         state.works,
  selectedChild: state.selectedChild,
});

const mapDispatchToProps = {
  addWork, deleteWork, addTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorksScreen);

