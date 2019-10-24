/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Button} from 'react-native';



class App extends Component<props> {
    constructor(props) {
        super(props);

        this.state = {
            isHidden: true
        };
    }

    onPress = () => {
        this.setState({
            isHidden: !this.state.isHidden
        });

    }

    render() {
        return (
            <View style = {{flex: 1, justifyContent: "center", alignItems:"center"}}>
                <TouchableOpacity onPress={this.onPress}>
                    <Text>Don't dare to test me!</Text>
                </TouchableOpacity>
                {
                    this.state.isHidden ? <View/> :
                        <View>
                            <Text>YOU ARE NOT PREPARED!</Text>
                        </View>

                }

            </View>

        )
    }
}



export default App;