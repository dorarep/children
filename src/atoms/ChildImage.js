import React             from 'react';
import { Image }         from 'react-native'

export default ({ picture, style }) => {
  if (picture) {
    return (<Image style={style} source={{uri: picture}} />)
  } else {
    return (<Image style={style} source={require('children/assets/images/child.png')} />)
  }
}