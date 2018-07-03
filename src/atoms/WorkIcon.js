import React              from 'react';
import { Image }          from 'react-native'
import { workIconImages } from 'children/src/util'

export default ({ work }) => {
  return (
    <Image source={workIconImages[work.icon]} />
  )
}