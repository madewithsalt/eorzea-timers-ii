import React, { Component } from 'react';
import NotificationsIOS from 'react-native-notifications';

export default class App extends Component {
    constructor(props) {
        super(props);

        NotificationsIOS.addEventListener('remoteNotificationsRegistered', this.onPushRegistered.bind(this));
        NotificationsIOS.addEventListener('remoteNotificationsRegistrationFailed', this.onPushRegistrationFailed.bind(this));
        NotificationsIOS.requestPermissions();
    }

    onPushRegistered(deviceToken) {
        console.log("Device Token Received", deviceToken);
    }

    onPushRegistrationFailed(error) {
        // For example:
        //
        // error={
        //   domain: 'NSCocoaErroDomain',
        //   code: 3010,
        //   localizedDescription: 'remote notifications are not supported in the simulator'
        // }
        console.error(error);
    }

    componentWillUnmount() {
        // prevent memory leaks!
        NotificationsIOS.removeEventListener('remoteNotificationsRegistered', this.onPushRegistered.bind(this));
        NotificationsIOS.removeEventListener('remoteNotificationsRegistrationFailed', this.onPushRegistrationFailed.bind(this));
    }

    render() {
      return this.props.children;
    }
}
