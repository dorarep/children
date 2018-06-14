import React             from 'react';
import { Icon }          from 'react-native-elements'

export default ({ onPress }) => {
  return (
    <Icon
      iconStyle={{ marginRight: 10 }}
      name='add-box'
      color='#00aced'
      onPress={ onPress }
    />
  )
}