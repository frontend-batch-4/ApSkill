import logo from "../images/Logo_Apskill.svg";
import PhotoProfile from "../images/PhotoProfile.svg";
import { Link } from "react-router-dom";
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

export default function KelasBerlangsung() {
  return (
    <>
      {/* Section Header */}
      <header className="flex items-center justify-between p-2 border-b-2 border-neutral40 bg-neutral10">
        <div className="pt-2 pl-10">
          <img className="h-6" src={logo} alt="Logo" />
        </div>
        <div className="flex-grow flex justify-center space-x-4">
          <Link to="/Home">
            <p className="font-semibold">Beranda</p>
          </Link>
          <p className="font-semibold text-primary">Kelas</p>
        </div>
        <div className="flex pr-10 justify-end">
          <img
            className="h-12 rounded-full bg-Info"
            src={PhotoProfile}
            alt="Profile"
          />
        </div>
      </header>
      {/* Section 2 */}
      <section className="flex-col justify-center items-center mt-12">
        <div>
          <h1 className="font-bold text-4xl text-center">Kelas Saya</h1>
        </div>
        <div className="flex-grow flex justify-center space-x-4 mt-8 gap-4">
          <Link to="/KelasBerlangsung">
            <p className="font-bold text-primary ">Kelas Berlangsung</p>
          </Link>
          <Link to="/KelasSelesai">
            <p className="font-semibold">Kelas Selesai</p>
          </Link>
        </div>
        {/* Card Selesai */}
        <div className="flex gap-12 items-center justify-center mt-10 ">
          <div className="flex flex-col border rounded-lg w-72 border-neutral40">
            <div className="flex flex-col items-star">
              <div className="rounded-lg w-full">
                <img
                  src={PictureLeadership}
                  alt="Icon"
                  className=" text-white rounded-lg"
                />
              </div>
              <h2 className="font-semibold text-xl p-4">Product Management</h2>
            </div>
            <div className=" flex justify-center w-full">
              <div className="pt-2 mb-8 w-10/12">
                <Button
                  type={undefined}
                  className=" rounded p-2 text-neutral10 w-full"
                >
                  Lanjutkan Kelas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex-col justify-center items-center mt-12">
        <div>
          <h1 className=" font-bold text-4xl text-center">Katalog Kelas</h1>
        </div>
        <div className="flex-grow flex justify-center space-x-4 mt-12 gap-8">
          <p className="font-bold text-primary">Semua</p>
          <p className="text-neutral70 font-semibold">UI/UX</p>
          <p className="text-neutral70 font-semibold">Product Management</p>
          <p className="text-neutral70 font-semibold">Full Stack Developer</p>
        </div>
      </section>
      {/* Section Card */}
      <section className="flex gap-4 mt-12 justify-center">
        <div className="flex flex-col items-start space-y-2 border rounded-lg max-w-screen-sm border-neutral40">
          <div className="rounded-lg w-full">
            <img
              src={ImagesUIUX}
              alt="Icon"
              className=" text-white rounded-lg"
            />
          </div>
          <h2 className="font-semibold text-xl p-4">
            Kelas UI/UX Design : <br /> Level Beginner
          </h2>
          <p className="font-semibold p-4 text-primary">RP.0</p>
        </div>
        <div className="flex flex-col items-start space-y-2 border rounded-lg max-w-screen-sm border-neutral40">
          <div className="rounded-lg w-full">
            <img
              src={PicturePM}
              alt="Icon"
              className=" text-white rounded-lg"
            />
          </div>
          <h2 className="font-semibold text-xl p-4">
            Kelas Product Managemet : <br />
            Level Beginner
          </h2>
          <p className="font-semibold p-4 text-primary">RP.0</p>
        </div>
        <div className="flex flex-col items-start space-y-2 border rounded-lg max-w-screen-sm border-neutral40">
          <div className="rounded-lg w-full">
            <img
              src={PictureFSD}
              alt="Icon"
              className=" text-white rounded-lg"
            />
          </div>
          <h2 className="font-semibold text-xl p-4">
            Kelas Full Stack Devoloper : <br /> Level Beginner{" "}
          </h2>
          <p className="font-semibold p-4 text-primary">RP.0</p>
        </div>
        <div className="flex flex-col items-start space-y-2 border rounded-lg max-w-screen-sm border-neutral40">
          <div className="rounded-lg w-full">
            <img
              src={PictureLeadership}
              alt="Icon"
              className=" text-white rounded-lg"
            />
          </div>
          <h2 className="font-semibold text-xl p-4">
            Kelas Pelatihan Leadership <br />
            dari 0 sampai expert
          </h2>
          <p className="font-semibold p-4 text-primary">RP.0</p>
        </div>
      </section>
      {/* Section Card 2 */}
      <section className="flex gap-4 mt-12 justify-center">
        <div className="flex flex-col items-start space-y-2 border rounded-lg max-w-screen-sm border-neutral40">
          <div className="rounded-lg w-full">
            <img
              src={ImagesUIUX}
              alt="Icon"
              className=" text-white rounded-lg"
            />
          </div>
          <h2 className="font-semibold text-xl p-4">
            Kelas UI/UX Design : <br /> Level Beginner
          </h2>
          <p className="font-semibold p-4 text-primary">RP.0</p>
        </div>
        <div className="flex flex-col items-start space-y-2 border rounded-lg max-w-screen-sm border-neutral40">
          <div className="rounded-lg w-full">
            <img
              src={PicturePM}
              alt="Icon"
              className=" text-white rounded-lg"
            />
          </div>
          <h2 className="font-semibold text-xl p-4">
            Kelas Product Managemet : <br />
            Level Beginner
          </h2>
          <p className="font-semibold p-4 text-primary">RP.0</p>
        </div>
        <div className="flex flex-col items-start space-y-2 border rounded-lg max-w-screen-sm border-neutral40">
          <div className="rounded-lg w-full">
            <img
              src={PictureFSD}
              alt="Icon"
              className=" text-white rounded-lg"
            />
          </div>
          <h2 className="font-semibold text-xl p-4">
            Kelas Full Stack Devoloper : <br /> Level Beginner{" "}
          </h2>
          <p className="font-semibold p-4 text-primary">RP.0</p>
        </div>
        <div className="flex flex-col items-start space-y-2 border rounded-lg max-w-screen-sm border-neutral40">
          <div className="rounded-lg w-full">
            <img
              src={PictureLeadership}
              alt="Icon"
              className=" text-white rounded-lg"
            />
          </div>
          <h2 className="font-semibold text-xl p-4">
            Kelas Pelatihan Leadership <br />
            dari 0 sampai expert
          </h2>
          <p className="font-semibold p-4 text-primary">RP.0</p>
        </div>
      </section>
      <footer className="footer bg-white text-black p-4 mt-32">
        <div className="container mx-auto grid grid-cols-5 gap-8">
          <div>
            <div className="col w-32">
              <img src={logo} alt="Logo Apskii" />
            </div>
            <p className="mt-6">
              ApSkil merupakan platform belajar online dengan memberikan mentor
              terbaik yang ahli dibidangnya.
            </p>
          </div>
          <div className="col">
            <h5 className="font-semibold">Perusahaan</h5>
            <ul className="list-none mt-8">
              <li className="mb-4">
                <a href="#" className="text-blue-500">
                  Kontak
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-blue-500">
                  Karir
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-blue-500">
                  Mentor
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5 className="font-semibold">Komunitas</h5>
            <ul className="list-none mt-8">
              <li className="mb-4">
                <a href="#" className="text-blue-500">
                  Testimoni
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-blue-500">
                  Webinar
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-blue-500">
                  Kapaljok
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5 className="font-semibold">Resource</h5>
            <ul className="list-none mt-8">
              <li className="mb-4">
                <a href="#" className="text-blue-500">
                  Showcase
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-blue-500">
                  Panduan Belajar
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-blue-500">
                  Kapaljok
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5 className="font-semibold">Media Sosial</h5>
            <ul className="list-none mt-8">
              <li className="mb-4">
                <a href="#" className="text-blue-500">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-blue-500">
                  Instagram
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-blue-500">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-32">
          <p>&copy; 2022 ApSkil. All right reserved.</p>
        </div>
      </footer>
    </>
  );
}
