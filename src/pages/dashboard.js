import { Header } from '../components/header'
import { FilterForm } from '../components/filter-form'
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
        <FilterForm />
      </div>
      <div className="DashboardPage--footer">
        <Footer />
      </div>
    </main>
  )
}
