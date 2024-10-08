import React from 'react'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

const { Header } = Layout

const HeaderBar = ({ collapsed, toggle }: { collapsed: boolean, toggle: () => void }) => (
  <Header className="bg-white p-0 flex items-center custom-header justify-between">
    <div>
      {React.createElement(
        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: 'trigger ml-4',
          onClick: toggle,
        },
      )}
    </div>
    <div className="flex items-center justify-end">
      <div className='w-[40px] h-[40px] bg-gray-200 rounded-full'></div>
    </div>
  </Header>
)

export default HeaderBar