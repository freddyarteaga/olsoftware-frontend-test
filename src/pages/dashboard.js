import { Header } from '../components/header'
import { Footer } from '../components/footer'

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
        <span style={{backgroundColor: 'lightblue'}}>content</span>
        <span style={{backgroundColor: 'lightgreen'}}>otra cosa</span>
      </div>
      <div className="DashboardPage--footer">
        <Footer />
      </div>
    </main>
  )
}
