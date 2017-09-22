import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const Topics = ( props ) => (
  <div>
    <h2>Here are your Topics</h2>
    <ul>
      <li>
        <Link to={`${props.match.url}/rendering`}>
          Rendering with React
              </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/components`}>
          Components
              </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/props-v-state`}>
          Props v. State
              </Link>
      </li>
    </ul>
    <Route path={`${props.match.url}/:topicId`} component={Topics} />
    <Route exact path={props.match.url} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

export default Topics;
