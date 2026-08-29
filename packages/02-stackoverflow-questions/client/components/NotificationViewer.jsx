import React from 'react';

import NotificationService from '../services/NotificationService';

export default class extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            count: -1
        }
    }

    async componentDidMount () {
        let { count } = await NotificationService.getNotifications();

        this.setState({count});
    }

    render() {
        return (
            <div className='notifications'>
                {this.state.count != -1 ? `${this.state.count} Notifications Awaiting!` : 'Loading...'}
            </div>
        )
    }
}
