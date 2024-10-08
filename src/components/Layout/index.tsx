import React from 'react'
import { Layout } from 'antd'
import SiderMenu from './components/siderMenu'
import HeaderBar from './components/headerBar'
import ContentArea from './components/contentArea'

class App extends React.Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <div>
        <Layout className="h-screen">
          <SiderMenu collapsed={this.state.collapsed} />
          <Layout className="flex flex-col h-[100vh]">
            <HeaderBar collapsed={this.state.collapsed} toggle={this.toggle} />
            <ContentArea />
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default App