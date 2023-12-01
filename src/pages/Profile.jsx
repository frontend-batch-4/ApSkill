import logo from "../images/Logo_Apskill.svg";
import PhotoProfile from "../images/PhotoProfile.svg";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Profile() {
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
      {/* Section Card */}
      <div className="flex items-center justify-center mt-28">
        <div className="flex flex-col items-center p-8 rounded-lg shadow-xs w-96 border border-neutral40">
          <img
            className=" w-36 h-36 rounded-full bg-Info"
            src={PhotoProfile}
            alt="Profile"
          />
          <div className="mx-4 text-center mt-8">
            <p className="text-lg font-bold text-neutral100">Arif Dian</p>
            <p className="text-semibold font-medium  text-Info mt-2">
              Arifdian72@gmail.com
            </p>
            <p className="text-semibold font-medium text-neutral50 mt-2">
              20 Tahun
            </p>
            <p className="text-semibold font-medium text-neutral50 mt-2">
              Mahasiswa
            </p>
          </div>
          <Button
            type={undefined}
            className=" rounded p-2 text-neutral10 w-52 mt-4"
          >
            Edit Profile
          </Button>
          <Button
            type={undefined}
            className=" rounded p-2 text-neutral100 font-semibold w-52 mt-4 bg-neutral30 border border-neutral40"
          >
            <Link to="/Login">Keluar</Link>
          </Button>
        </div>
      </div>

      <hr className="border-neutral30 border-t-2 w-full md:w-11/12 mx-auto mt-24" />
      {/* Footer */}
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
