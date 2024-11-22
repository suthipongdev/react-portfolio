import Contect from "../Contect"
import Header from "../Header"
import Navbar from "../Navber"

const LeftSection = () => {

    return(
        <div>
        <div className="sticky top-14 grid gap-y-5 lg:grid-rows-[35%_45%_20%] lg:h-[90vh] px-3">
          <Header />
          <Navbar />
          <Contect />
        </div>
      </div>
    )
}

export default LeftSection