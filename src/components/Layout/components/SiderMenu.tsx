import { Layout, Menu } from 'antd'
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons'
const { Sider } = Layout
const SiderMenu = ({ collapsed }: { collapsed: boolean }) => (
  <Sider
    trigger={null}
    collapsible
    collapsed={collapsed}
    className="w-[200px] custom-sider"
  >
    <div className="p-4 flex justify-center">
      <img src="/vite.svg" alt="logo" />
    </div>
    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        nav 1
      </Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        nav 2
      </Menu.Item>
      <Menu.Item key="3" icon={<UploadOutlined />}>
        nav 3
      </Menu.Item>
    </Menu>
  </Sider>
)

export default SiderMenu