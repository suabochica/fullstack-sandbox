import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import getStore from './getStore';
import App from './App';
import './styles.css';

const history = createHistory()
const store = getStore(history);

// Hot reloading: No necessary refresh the changes to update contents
if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;

        render(NextApp);
    })
}

const render = (_App) => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <_App />
            </ConnectedRouter>
        </Provider>,
        document.getElementById('AppContainer')
    )
}

store.subscribe(() => {
    const state = store.getState();

    if (state.questions.length > 0) {
        console.info("Mounting the app");

        render(App);
    } else {
        console.info("App not yet mounting");
    }
});

const fetchDataForLocation = location => {
    if (location.pathname === "/") {
        store.dispatch({ type: 'REQUEST_FETCH_QUESTIONS' });
    }

    if (location.pathname.includes('questions')) {
        store.dispatch({
            type: 'REQUEST_FETCH_QUESTION',
            question_id: location.pathname.split('/')[2]
        });
    }
}

fetchDataForLocation(history.location);
history.listen(fetchDataForLocation);