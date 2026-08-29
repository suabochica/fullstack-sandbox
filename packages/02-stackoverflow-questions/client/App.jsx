
import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

import QuestionList from './components/QuestionList';
import QuestionDetail from './components/QuestionDetail';
import NotificationViewer from './components/NotificationViewer';

const AppDisplay = () => (
    <div>
        <div className='app-header'>
            <Link to={`/`}>
                <h1>Stackoverflow Question - Isomorphic React</h1>
            </Link>
            <div className='app-subtitle'>
                <p>An <strong>isomorphic React</strong> application (also frequently referred to as <strong>Universal React</strong>) is a web application where the same React code runs on both the server and the client browser.</p>
                <p>In a traditional Single Page Application (SPA), the server sends a blank HTML file and a large JavaScript bundle. The user sees a blank screen or loading spinner until the browser downloads, parses, and executes the JavaScript. An isomorphic architecture eliminates this delay.</p>
                <h3>How the Isomorphic Workflow Works</h3>
                <p><strong>Server-Side Render (SSR):</strong> When a user requests a page, a backend engine like Node.js executes the React component tree on the server. It converts the components into a raw HTML string using server-side functions and sends that fully-formed HTML back to the browser.</p>
                <p><strong>Immediate Visual Paint:</strong> The browser receives the pre-rendered HTML and displays it instantly. The user can read text and view layout structures immediately without experiencing a "Flash of Unstyled Content" (FOUC).</p>
                <p><strong>Hydration:</strong> Simultaneously, the browser downloads the application's client-side JavaScript bundle. React scans the existing HTML markup and attaches event listeners (like clicks and form submits) to it. This process is called hydration.</p>
                <p><strong>Client-Side Takeover:</strong> Once hydrated, the app functions smoothly as a traditional SPA. Subsequent page navigation and state updates happen locally in the browser without full-page reloads.</p>
            </div>
        </div>
        <div className='notifications-bar'>
            <NotificationViewer />
        </div>
        <div>
            <Route exact path="/" render={() => <QuestionList />} />
            <Route exact path="/questions/:id" render={({ match }) => <QuestionDetail question_id={match.params.id} />} />
        </div>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
};

export default connect(mapStateToProps)(AppDisplay);
