import { Header } from '../components/header'
import { Sidebar } from '../components/sidebar'
import { UsersTable } from '../components/users-table'
import { FilterForm } from '../components/filter-form'
import { Footer } from '../components/footer'

export const DashboardPage = () => {
  return (
    <main className="DashboardPage FullPage">
      <div className="DashboardPage--sidebar">
        <Sidebar />
      </div>
      <div className="DashboardPage--header">
        <Header />
      </div>
      <div className="DashboardPage--content">
        <UsersTable />
        <FilterForm />
      </div>
      <div className="DashboardPage--footer">
        <Footer />
      </div>
    </main>
  )
}
