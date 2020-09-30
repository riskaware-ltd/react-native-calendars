import React, { Component } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

class TouchableSelection extends Component {
    components = {
        touchableOpacity: TouchableOpacity,
        touchableWithoutFeedback: TouchableWithoutFeedback
    };
    render() {
        if (!this.props.useTouchableWithoutFeedback) {
            const TagName = this.components['touchableOpacity'];
            return <TagName {...this.props} />
        } else {
            const TagName = this.components['touchableWithoutFeedback'];
            return (
                <TagName {...this.props}>
                    <View style={this.props.style} >
                        {this.props.children}
                    </View>
                </TagName>
            );
        }
    }
}
export default TouchableSelection;