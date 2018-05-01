import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from '../components/LoginForm';
import Dashboard from '../components/Dashboard';
import CreatePlayer from '../components/CreatePlayer';
import EditPlayer from '../components/EditPlayer';

const MainRouter = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial />
                </Scene>

                <Scene key="main">
                    <Scene 
                        key="players" 
                        component={Dashboard} 
                        title="Free Agent Tracker" 
                        rightTitle="Join Us!"
                        onRight={() => { Actions.createPlayer() }}
                    />

                    <Scene
                        key="createPlayer"
                        component={CreatePlayer}
                        title="Join the Tracker!"
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default MainRouter;