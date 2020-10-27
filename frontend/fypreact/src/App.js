import React from 'react';
import logo from './logo.svg';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less

import CustomLayout from './containers/Layout'
import ArticleList from './containers/ArticleListView'

function App() {
  return (
    <div className="App">
     <CustomLayout>

        <ArticleList />


     </CustomLayout>

    </div>
  );
}

export default App;
