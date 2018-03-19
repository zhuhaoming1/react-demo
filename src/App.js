import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import { Layout, Icon,Menu,Dropdown,Avatar} from 'antd';
import RealTimeEvaluation from "./components/RealTimeEvaluation/RealTimeEvaluation";
import StatisticalChart from "./components/StatisticalChart/StatisticalChart";
import DataReport from "./components/DataReport/DataReport";

import "antd/dist/antd.min.css";
import "./App.css";
import logoImg from './images/logo.png';

const {Header,Sider,Footer,Content} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
class App extends Component{
  render() {
    const menu = (
      <Menu>
        <MenuItem disabled><Icon type="user" />个人中心</MenuItem>
        <MenuItem disabled><Icon type="setting" />设置</MenuItem>
        <MenuItem><Icon type="logout" />退出登录</MenuItem>
      </Menu>
    );
    return (
      <Router>
        <Layout className="appContainer">
          <Sider className="nav-sider">
            <div className="logo">
              <Link to="/">
                <img src={logoImg} alt="logo"/>
                <span className="logo-name">商业智能系统</span>
              </Link>
            </div>
            <Menu mode="inline" theme="dark">
              <SubMenu key="market" title={<span><Icon type="dashboard" /><span>竞品分析</span></span>}>
                <MenuItem key="RealTimeEvaluation"><Link to={`/market/evaluation`}>实时估价</Link></MenuItem>
                <MenuItem key="StatisticalChart"><Link to={`/market/statistical`}>统计分析</Link></MenuItem>
                <MenuItem key="DataReport"><Link to={`/market/datareport`}>数据统计</Link></MenuItem>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout className="con-sider">
            <Header className="header" style={{background:'#fff'}}>
              <Icon className="collapsidle-btn" type="menu-unfold"/>
              <div className="header-right">
                <Dropdown overlay={menu}>
                  <span><Avatar className="login-icon" size="small" icon="user"/></span>
                </Dropdown>
              </div>
            </Header>
            <Content className="content">
              <Switch>
                <Route exect path="/market/evaluation" component={RealTimeEvaluation}/>
                <Route exect path="/market/statistical" component={StatisticalChart}/>
                <Route exect path="/market/datareport" component={DataReport}/>
                <Redirect exect from="/" to="/market/evaluation"/>
              </Switch>
            </Content>
            <Footer className="footer"><Icon type="copyright" />2018 易到大数据中心</Footer>
          </Layout>
        </Layout>
        
      </Router>
    )
  };
};

export default App;
