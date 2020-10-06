import React, { Component } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

class TouchableSelection extends Component {
    render() {
        const CustomMenuWrapper = this.props.customMenuWrapper;

        if (this.props.showTouchFeedback) {
            if(this.props.selected && this.props.customMenuWrapper){
                return (
                    <CustomMenuWrapper>
                        <TouchableOpacity {...this.props} />
                    </CustomMenuWrapper>
                );
            } 

            return <TouchableOpacity {...this.props} />       
        } else {
            if(this.props.selected && this.props.customMenuWrapper){
                return (
                <CustomMenuWrapper>
                  <TouchableWithoutFeedback {...this.props}>
                    <View style={this.props.style} >
                        {this.props.children}
                    </View>
                  </TouchableWithoutFeedback>
                </CustomMenuWrapper>
                );
            } 
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