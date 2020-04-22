import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Helmet } from 'react-helmet';
import API from './Util/API';
import Page from './Components/Page';

// Config
window.api_url = 'http://localhost:1337';

// Get requested page data
let pageData = new Promise(function(resolve) {
  let api = new API();
  let pageUid = window.location.pathname;

  api.getPage(pageUid).then(function(data) {
    if (data !== undefined) {
      resolve(data);
    }

    pageData = api.getPage('404').then(function(data) {
      resolve(data);
    });
  });
});

// Output page
pageData.then(function(data) {
  ReactDOM.render(
    <React.StrictMode>
      <Helmet>
        <title>{data.Title}</title>
      </Helmet>

      <Page data={data} />
    </React.StrictMode>,
    document.getElementById('root')
  );
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
