import React from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import PlayerForm from './PlayerForm';
import { addPlayer } from '../actions/players';

class CreatePlayer extends React.Component {

    constructor(props) {
        super(props);
        
        this.onButtonPressed = this.onButtonPressed.bind(this);
    }

    onButtonPressed() {
        const { name, gender, skill_level, sport_type, message, dispatch } = this.props;
        dispatch(addPlayer({ name, gender, skill_level, sport_type, message }));
    }

    render() {
        return (
            <Card>
                <PlayerForm {...this.props} />

                <CardSection>
                    <Button onPress={this.onButtonPressed}>Join Now!</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, gender, skill_level, sport_type, message } = state.playerForm;

    return {
        name,
        gender,
        skill_level,
        sport_type,
        message
    }
};

export default connect(mapStateToProps)(CreatePlayer);