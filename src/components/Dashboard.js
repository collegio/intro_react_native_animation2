import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { View, Text, Image } from 'react-native';
import PlayersList from './PlayersList';
import { Card, CardSection } from './common';
import { getPlayers } from '../actions/players';

class Dashboard extends React.Component {

    constructor(props) {

        super(props);
        props.dispatch(getPlayers());
    }
  
    renderCard(item) {
        return (
            <View style={styles.cardContainerStyle}>
              <Card key={item.id}>
                <CardSection>
                  <Text style={styles.nameStyle}>{item.name}</Text>
                </CardSection>
                <CardSection style={styles.messageSection}>
                    <Text style={styles.playerMessage}>{item.message}</Text>
                </CardSection>
                <CardSection>
                  <Text style={styles.messageStyle}>{item.gender} - {item.sport_type}</Text>
                </CardSection>
              </Card>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <PlayersList 
              
                    data={this.props.players}
                    renderCard={this.renderCard}
                />
            </View>
        );
    }
}

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    cardContainerStyle: {
      marginTop: 40
    },
    nameStyle: {
      fontSize: 24,
      padding: 20
    },
    messageStyle: {
      fontSize: 18,
      padding: 10
    },
    playerMessage: {
        padding: 50,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '700'
    },
    messageSection: {
        backgroundColor: '#090'
    }
};

const mapStateToProps = (state) => {
    console.log(state);
    const players = _.map(state.players.players, (val, uid) => {
        return {
            ...val,
            uid
        };
    });

    return {
        players
    };
}

export default connect(mapStateToProps)(Dashboard);