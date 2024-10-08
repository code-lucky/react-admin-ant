import { Card } from 'antd'
import { Layout } from 'antd'
const { Content } = Layout
const ContentArea = () => (
  <div className="p-4">
    <Card>
      <Content className="bg-white flex-1">Content</Content>
    </Card>
  </div>
)

export default ContentArea