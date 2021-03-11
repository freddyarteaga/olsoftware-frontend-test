import { Header } from '../components/header'

export const DashboardPage = () => {
  return (
    <main className="DashboardPage FullPage">
      <div className="DashboardPage--sidebar">
        sidebar
      </div>
      <div className="DashboardPage--header">
        <Header />
      </div>
      <div className="DashboardPage--content">
        content
      </div>
      <div className="DashboardPage--footer">
        footer
      </div>
    </main>
  )
}
