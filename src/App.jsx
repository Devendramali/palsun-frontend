import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Topnav from "./pages/Topnav";
import Home from "./pages/Home";
import GrampanchayatPrashsan from "./pages/GrampanchayatPrashsan";
import AboutUs from "./pages/AboutUs";
import MahitiAdhikar from "./pages/MahitiAdhikar";
import Awards from "./pages/Awards";
import Notices from "./pages/Notices";
import SoiSuvidha from "./pages/SoiSuvidha";
import JamaKharchPatrak from "./pages/JamaKharchPatrak";
import Contact from "./pages/Contact";
import PanchayatRajMission from "./pages/PanchayatRajMission";
import History from "./pages/History";
import Footer from "./pages/Footer";
import Gallery from "./pages/dropdown/Gallery";
import GovDecision from "./pages/dropdown/GovDecision";
import GovSchemes from "./pages/dropdown/GovSchemes";
import VillageProgram from "./pages/dropdown/VillageProgram";
import ImportantLinks from "./component/ImportantLinks";
import HavamanAndaj from "./pages/HavamanAndaj";
import SwayamGhoshnaPatre from "./pages/SwayamGhoshnaPatre";
import Error from "./pages/Error";
import Thankyou from "./pages/Thankyou";

const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      <Topnav />
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Error />} />
          <Route path="/thank-you" element={<Thankyou />} />
          <Route path="/GrampanchayatPrashsan" element={<GrampanchayatPrashsan />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/mahitiadhikar" element={<MahitiAdhikar />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/soisuvidha" element={<SoiSuvidha />} />
          <Route path="/jamaKharchPatrak" element={<JamaKharchPatrak />} />
          <Route path="/history" element={<History />} />
          <Route path="/panchayatRajMission" element={<PanchayatRajMission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/government-schemes" element={<GovSchemes />} />
          <Route path="/village-programs" element={<VillageProgram />} />
          <Route path="/govt-decisions" element={<GovDecision />} />
          <Route path="/ImportantLinks" element={<ImportantLinks />} />
          <Route path="/HavamanAndaj" element={<HavamanAndaj />} />
          <Route path="/SwayamGhoshnaPatre" element={<SwayamGhoshnaPatre />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;