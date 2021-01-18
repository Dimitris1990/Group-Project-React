
import React from 'react'
import {BrowserRouter as Router, Switch , Route, useParams} from 'react-router-dom'
import ChatRoom from '../components/LeChat/ChatRoom'
import Home from '../components/LeChat/Home'

function Chat() {
    return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:roomId" component={ChatRoom} />
      </Switch>
    </Router>
    )
}

export default Chat
