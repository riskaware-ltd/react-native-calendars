import React, { Component } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

class TouchableSelection extends Component {
    render() {
        if (this.props.showTouchFeedback) {
            return <TouchableOpacity {...this.props} />
        } else {
            return (
                <TouchableWithoutFeedback {...this.props}>
                    <View style={this.props.style} >
                        {this.props.children}
                    </View>
                </TouchableWithoutFeedback>
            );
        }
    }
}
export default TouchableSelection;