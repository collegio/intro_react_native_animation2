import React from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { playerFormUpdate } from '../actions/playerForm';

class PlayerForm extends React.Component {

    render() {

        const { name, gender, skill_level, sport_type, message, dispatch } = this.props;

        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Rob Myers"
                        value={name}
                        onChangeText={(value) => dispatch(playerFormUpdate({ prop: 'name', value }))}
                    />
                </CardSection>

                <CardSection>
                    <Text>Gender</Text>
                    <Picker
                        style={{flex:1}} 
                        selectedValue={gender}
                        onValueChange={(value) => dispatch(playerFormUpdate({ prop: 'gender', value }))}
                    >
                        <Picker.Item label="Male" value="M" />
                        <Picker.Item label="Female" value="F" />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Input
                        label="Sport"
                        placeholder="Hockey"
                        value={sport_type}
                        onChangeText={(value) => dispatch(playerFormUpdate({ prop: 'sport_type', value }))}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Skill Level"
                        placeholder="ie. Basic"
                        value={skill_level}
                        onChangeText={(value) => dispatch(playerFormUpdate({ prop: 'skill_level', value }))}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Message"
                        placeholder="Write a message!"
                        value={message}
                        onChangeText={(value) => dispatch(playerFormUpdate({ prop: 'message', value }))}
                    />
                </CardSection>
            </View>
        );
    }
}

export default connect()(PlayerForm);