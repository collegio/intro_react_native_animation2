import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { Button, Card, CardSection, Input, LoadingSpinner } from './common';
import { emailUpdated, passwordUpdated, loginUser } from '../actions/auth';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.onButtonPress = this.onButtonPress.bind(this);
        this.loginSuccess = this.loginSuccess.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    renderButton() {
        if (this.props.loading) {
            return <LoadingSpinner size="small" />;
        }
        else {
            return <Button onPress={this.onButtonPress}>Log In</Button>;
        }
    }

    onButtonPress() {

        const { email, password } = this.props;
        this.props.dispatch(loginUser({ email, password }));
    }

    loginSuccess() {
        // this.setState(() => ({
        //     error: '',
        //     email: '',
        //     password: '',
        //     loading: false
        // }));
    }

    onEmailChange(email) {
        this.props.dispatch(emailUpdated(email));
    }

    onPasswordChange(password) {
        this.props.dispatch(passwordUpdated(password));
    }

    render() {
        console.log(this.props.user);

        return (
            <Card>
                {(this.props.error) ? <Text style={styles.errorText}>{this.props.error}</Text> : null}
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="test@user.com"
                        value={this.props.email}
                        onChangeText={this.onEmailChange}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Password"
                        placeholder="pass1234"
                        isPassword
                        value={this.props.password}
                        onChangeText={this.onPasswordChange}
                    />
                </CardSection>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#900'
    }
}

const mapStateToProps = (state) => {

    return {
        email: state.auth.email,
        password: state.auth.password,
        loading: state.auth.loading,
        error: state.auth.error,
        user: state.auth.user
    };
};

export default connect(mapStateToProps)(LoginForm);