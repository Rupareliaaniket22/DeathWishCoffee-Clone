import Footer from '../hero/Footer'
import NavLayout from '../nav/NavLayout'

function SamplePage() {
  return (
    <div className="h-screen w-screen ">
      <NavLayout />
      <di className="flex h-screen w-screen items-center justify-center">
        <p className=" font-[Revans] text-3xl text-white md:text-5xl ">
          Sample Page
        </p>
      </di>
      <Footer />
    </div>
  )
}

export default SamplePage
