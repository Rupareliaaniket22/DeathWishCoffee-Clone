import Footer from './hero/Footer'
import Homepage from './pages/Homepage'
import JoinInsta from './hero/JoinInsta'
import NavLayout from './nav/NavLayout'

function AppLayout() {
  return (
    <div>
      <NavLayout />
      <Homepage />
      <JoinInsta />
      <Footer />
    </div>
  )
}

export default AppLayout
