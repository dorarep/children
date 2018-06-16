import React                             from 'react';
import { View }                          from 'react-native';
import { List, ListItem }                from 'react-native-elements'
import ChildImage                        from 'children/src/atoms/ChildImage';

export default ({ children, selectedChild, onPress }) => {
  return (
    <List>
      { children.filter(child => child.id === selectedChild).map((child, i) => (
        <ListItem
          roundAvatar
          rightIcon={ ( <View /> ) }
          avatar={<ChildImage picture={child.picture} style={{width: 64, height: 64}} />}
          key={i}
          title={child.name}
          subtitle={`${child.point}ポイント`}
          onPress={ onPress }
        />))
      }
    </List>
  )
}