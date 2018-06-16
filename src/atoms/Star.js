import React      from 'react';
import LottieView from 'lottie-react-native';
import { TouchableWithoutFeedback } from 'react-native';

export default class Star extends React.Component {
  render () {
    return (
      <TouchableWithoutFeedback onPress={() => {this.animation.play(); this.props.onPress();}}>
        <LottieView
          ref={animation => { this.animation = animation; }}
          source={require('children/assets/lotties/favourite_app_icon.json')}
          loop={false}
          progress={this.props.isClicked ? 1 : 0}
        />
      </TouchableWithoutFeedback>
    )
  }
}