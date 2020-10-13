import React, { Component } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

class TouchableSelection extends Component {
    render() {
        const CustomMenuWrapper = this.props.customMenuWrapper;
        const TouchableClass = this.props.showTouchFeedback ? TouchableOpacity : ((props) => 
            <TouchableWithoutFeedback {...props}>
                <View style={props.style} >
                    {props.children}
                </View>
            </TouchableWithoutFeedback>
        );

        if(this.props.selected && this.props.customMenuWrapper){
            return (
                <CustomMenuWrapper>
                    <TouchableClass {...this.props} />
                </CustomMenuWrapper>
            );
        } 

        return <TouchableClass {...this.props} />       
    }
}
export default TouchableSelection;