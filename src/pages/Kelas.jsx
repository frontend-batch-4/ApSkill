import logo from "../images/Logo_Apskill.svg";
import { Link } from "react-router-dom";
import PhotoProfile from "../images/PhotoProfile.svg";
import Button from "../components/Button";
import Foto1 from "../images/FotoHome.svg";
import Adobe from "../images/Adobe.svg";
import Amazon from "../images/Amazon.svg";
import DigitalOcean from "../images/DigitalOcean.svg";
import Github from "../images/GitHub.svg";
import Google from "../images/Google.svg";
import LogoBuilding from "../images/LogoBuilding.svg";
import LogoBriefcase from "../images/LogoBriefcase.svg";
import LogoCertificate from "../images/LogoCertificate.svg";
import LogoEye from "../images/LogoEye.svg";
import ImagesUIUX from "../images/ImagesUIUX.svg";
import PicturePM from "../images/PicturePM.svg";
import PictureFSD from "../images/PictureFSD.svg";
import PictureLeadership from "../images/PictureLeadership.svg";
import IconIchsan from "../images/IconIchsan.svg";
import LogoPetik from "../images/LogoPetik.svg";

export default function Kelas() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between p-2 border-b-2 border-neutral40 bg-neutral10">
        <div className="pt-2 pl-10">
          <Link to="/Home">
            <img className="h-6" src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="flex-grow flex justify-center space-x-4 mt-4 md:mt-0">
          <Link to="/Home">
            <p className="font-semibold">Beranda</p>
          </Link>
          <Link to="/KelasBerlangsung">
            <p className="font-semibold  text-primary">Kelas</p>
          </Link>
        </div>
        <Link to="/Profile">
          <div className="flex pr-10 justify-end mt-4 md:mt-0">
            <img
              className="h-12 rounded-full bg-Info"
              src={PhotoProfile}
              alt="Profile"
            />
          </div>
        </Link>
      </header>
      {/* <div className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded border px-4 py-2 bg-white text-black"
        >
          Pilih Opsi
        </button>
        {isOpen && (
          <div className="dropdown">
          <button onClick={() => setIsOpen(!isOpen)}>
            Dropdown
          </button>
          {isOpen && (
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          )}
        </div>
        )}
      </div> */}
    </>
  );
}
