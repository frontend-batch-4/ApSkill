import logo from "../images/Logo_Apskill.svg";
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
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Section Header */}
      <header className="flex flex-col md:flex-row items-center justify-between p-2 border-b-2 border-neutral40 bg-neutral10">
        <div className="pt-2 pl-10">
          <Link to="/Home">
            <img className="h-6" src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="flex-grow flex justify-center space-x-4 mt-4 md:mt-0">
          <Link to="/Home">
            <p className="font-semibold text-primary">Beranda</p>
          </Link>
          <Link to="/KelasBerlangsung">
            <p className="font-semibold">Kelas</p>
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
      {/* Section 1 */}
      <section className="flex flex-col items-center justify-center px-4 md:px-0">
        <h1 className="text-center font-semibold text-4xl pt-14">
          Pelajari apa pun, kapan pun, di mana pun untuk{" "}
          <br className="md:hidden" />
          tingkatkan kemampuan kamu
        </h1>
        <p className="text-center pt-8 text-neutral60">
          Kursus online dan spesialisasi bersertifikat yang membantu kamu untuk
          <br className="md:hidden" />
          meningkatkan keterampilan untuk bersaing di dunia kerja
        </p>
        <div className="pt-8">
          <Button type={undefined} className=" rounded p-2 text-neutral10">
            Jelajahi Lebih Lanjut
          </Button>
        </div>
        <div className="pt-8 ">
          <img src={Foto1} alt="Foto" />
        </div>
        <p className="text-center pt-8 text-lg text-neutral70 font-semibold">
          Sertifikasi resmi dari berbagai perusahaan
        </p>
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-20 p-8 mt-8 ">
          <img src={Adobe} alt="Adobe" />
          <img src={Amazon} alt="Amazon" />
          <img src={DigitalOcean} alt="DigitalOcean" />
          <img src={Github} alt="Github" />
          <img src={Google} alt="Google" />
        </div>
      </section>
      {/* Section 2 */}
      <section className="flex flex-col md:flex-row mt-20 mx-4 md:mx-0">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:ml-44 mt-32 ">
          <h1 className=" font-bold text-4xl text-primary text-center md:text-left">
            Kenapa Harus Memilih <br className="hidden md:block" />
            ApSkill?
          </h1>
          <p className=" text-neutral70 mt-5 text-center md:text-left">
            Kami memiliki banyak keunggulan dibandingkan kursus{" "}
            <br className="hidden md:block" />
            online lainnya. Jangan ragu untuk memilih kami, kami{" "}
            <br className="hidden md:block" />
            akan memberikan layanan terbaik.
          </p>
          <div>
            <Button
              type={undefined}
              className=" mt-5 rounded p-2.5 text-neutral10"
            >
              Belajar Sekarang
            </Button>
          </div>
        </div>
        {/* Section 3 Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mr-4 md:mr-32">
          <div className="flex flex-col items-start space-y-2 p-4 border rounded-lg max-w-xs border-neutral30">
            <div className="p-2 bg-primarySurface rounded-full">
              <img
                src={LogoBuilding}
                alt="Icon"
                className="h-8 w-8 text-white"
              />
            </div>
            <h2 className="font-semibold">Kurikulum Standar Industri</h2>
            <p>
              Materi yang disediakan selalu diperbarui menyesuaikan dengan
              standar kebutuhan industri saat ini.
            </p>
          </div>
          <div className="flex flex-col items-start space-y-2 p-4 border rounded-lg max-w-xs border-neutral30">
            <div className="p-2 bg-primarySurface rounded-full">
              <img src={LogoEye} alt="Icon" className="h-8 w-8 text-white" />
            </div>
            <h2 className="font-semibold">Review oleh Profesional</h2>
            <p>
              Final project akan direview dan divalidasi oleh mentor profesional
              di bidangnya.
            </p>
          </div>
          <div className="flex flex-col items-start space-y-2 p-4 border rounded-lg max-w-xs border-neutral30">
            <div className="p-2 bg-primarySurface rounded-full">
              <img
                src={LogoCertificate}
                alt="Icon"
                className="h-8 w-8 text-white"
              />
            </div>
            <h2 className="font-semibold">Sertifikat Spesialisasi</h2>
            <p>
              Kembangkan hard skill dan soft skill dengan selesaikan semua level
              kelas untuk meraih sertifikat spesialisasi
            </p>
          </div>
          <div className="flex flex-col items-start space-y-2 p-4 border rounded-lg max-w-xs border-neutral30">
            <div className="p-2 bg-primarySurface rounded-full">
              <img
                src={LogoBriefcase}
                alt="Icon"
                className="h-8 w-8 text-white"
              />
            </div>
            <h2 className="font-semibold">Job Connect</h2>
            <p>
              Membantu menyalurkan bakat dengan bekerja di perusahaan impian
            </p>
          </div>
        </div>
      </section>
      {/* Section 4 */}
      <section className="flex-col justify-center items-center mt-12 px-4 md:px-0">
        <div>
          <h1 className=" font-bold text-4xl text-center">
            Kursus Paling Populer
          </h1>
        </div>
        <div className="flex-grow flex justify-center flex-wrap space-x-4 mt-12 gap-8">
          <p className="font-semibold text-primary">Semua</p>
          <p className="text-neutral70">UI/UX</p>
          <p className="text-neutral70">Product Management</p>
          <p className="text-neutral70">Full Stack Developer</p>
        </div>
      </section>
      {/* Section Card */}
      <section className="flex flex-wrap gap-4 mt-12 justify-center px-4 md:px-0">
        <div className="flex flex-col items-start space-y-2 border rounded-lg max-w-screen-sm border-neutral40 mb-4">
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
        <div className="flex flex-col items-start space-y-2 border rounded-lg max-w-screen-sm border-neutral40 mb-4">
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
        <div className="flex flex-col items-start space-y-2 border rounded-lg max-w-screen-sm border-neutral40 mb-4">
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
        <div className="flex flex-col items-start space-y-2 border rounded-lg max-w-screen-sm border-neutral40 mb-4">
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
      {/* Section 5 */}
      <section className="flex-col items-start mt-12 ml-4 md:ml-72">
        <div>
          <p className="font-bold text-primary text-4xl items-start ">
            Pendapat mereka tentang ApSkil
          </p>
        </div>
      </section>
      {/* Section Card */}
      <section>
        <div>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex flex-col items-start space-y-2 border rounded-lg w-full md:w-96 mt-12 p-4 border-neutral40">
              <div className="p-4">
                <img src={LogoPetik} alt="Logo" />
              </div>
              <div className="items-center space-y-2 p-4 ">
                <h2 className="font-semibold">
                  Saya sudah bersama ApSkil dalam 1 tahun, Saya mendapat banyak
                  keterampilan baru. Saya sangat senang dengan ApSkil.
                </h2>
              </div>
              <div className="flex items-center justify-start p-6 rounded-full gap-4">
                <img
                  src={IconIchsan}
                  alt="User Icon"
                  className="h-12 w-12 text-white  rounded-3xl bg-Info"
                />
                <p>Ichsan ghaniy</p>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-2 border rounded-lg w-full md:w-96 mt-12 p-4 border-neutral40">
              <div className="p-4">
                <img src={LogoPetik} alt="Logo" />
              </div>
              <div className="items-center space-y-2 p-4 ">
                <h2 className="font-semibold">
                  Saya sudah bersama ApSkil dalam 1 tahun, Saya mendapat banyak
                  keterampilan baru. Saya sangat senang dengan ApSkil.
                </h2>
              </div>
              <div className="flex items-center justify-start p-6 rounded-full gap-4">
                <img
                  src={IconIchsan}
                  alt="User Icon"
                  className="h-12 w-12 text-white  rounded-3xl bg-Info"
                />
                <p>Ichsan ghaniy</p>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-2 border rounded-lg w-full md:w-96 mt-12 p-4 border-neutral40">
              <div className="p-4">
                <img src={LogoPetik} alt="Logo" />
              </div>
              <div className="items-center space-y-2 p-4 ">
                <h2 className="font-semibold">
                  Saya sudah bersama ApSkil dalam 1 tahun, Saya mendapat banyak
                  keterampilan baru. Saya sangat senang dengan ApSkil.
                </h2>
              </div>
              <div className="flex items-center justify-start p-6 rounded-full gap-4">
                <img
                  src={IconIchsan}
                  alt="User Icon"
                  className="h-12 w-12 text-white  rounded-3xl bg-Info"
                />
                <p>Ichsan ghaniy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-neutral30 border-t-2 w-full md:w-11/12 mx-auto mt-24" />
      {/* Section Footer */}
      <footer className="footer bg-white text-black p-4 mt-32">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
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
