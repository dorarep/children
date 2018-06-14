import React                             from 'react';
import { View }                          from 'react-native';
import { List, ListItem, Icon }          from 'react-native-elements'

export default ({ children, selectedChild, onPress }) => {
  return (
    <List>
      { children.filter(child => child.id === selectedChild).map((child, i) => (
        <ListItem
          roundAvatar
          rightIcon={ ( <View /> ) }
          avatar={child.image ? {uri: child.image} : (<Icon name="accessibility" />)}
          key={i}
          title={child.name}
          subtitle={`${child.point}ポイント`}
          onPress={ onPress }
        />))
      }
    </List>
  )
}