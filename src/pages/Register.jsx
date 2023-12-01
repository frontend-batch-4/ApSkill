import logo from "../images/Logo_Apskill.svg";
import { Link } from "react-router-dom";
import Facebook from "../images/Facebook.svg";
import GoogleIcon from "../images/GoogleIcon.svg";

export default function Register() {
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen w-screen">
        <section className="w-full md:w-1/2 h-full bg-white">
          <div className="pt-8 pl-12">
            <img className="h-8" src={logo} alt="Logo" />
          </div>

          <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="bg-white p-8 rounded shadow-lg w-96">
              <h2 className="text-2xl font-bold mb-1 text-neutral100">
                Buat Akun Baru
              </h2>

              <p className="mb-6 font-semibold text-neutral50">
                Sudah Memiliki Akun?
                <span className="text-primary">
                  <Link to="/Login"> Masuk</Link>
                </span>
              </p>
              <form>
                <div className="mb-4">
                  <label className="font-semibold">Nama Depan</label>
                  <input
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Nama Depan"
                  />
                </div>
                <div className="mb-4">
                  <label className="font-semibold">Nama Belakang</label>
                  <input
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Nama Belakang"
                  />
                </div>
                <div className="mb-4">
                  <label className="font-semibold">Email</label>
                  <input
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Masukan Email"
                  />
                </div>
                <div className="mb-6">
                  <label className="font-semibold">Password</label>
                  <input
                    className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Masukan password"
                  />
                </div>
                <Link to="/Home">
                  <div className="flex items-center justify-between">
                    <button
                      className="px-4 py-2 font-bold text-neutral10 w-full bg-primary rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Daftar
                    </button>
                  </div>
                </Link>
              </form>
              <p className="mt-6 text-center text-semibold">
                Daftar Menggunakan
              </p>
              <div className="flex justify-center mt-4">
                <Link to="/Home">
                  <button
                    className=" flex justify-center items-center w-32 gap-2 px-4 py-2 ml-2 font-bold text-white bg-neutral10 rounded hover:bg-neutral40 focus:outline-none focus:shadow-outline border border-neutral40"
                    type="button"
                  >
                    <img src={Facebook} alt="Facebook" />
                    Facebook
                  </button>
                </Link>
                <Link to="/Home">
                  <button
                    className="flex justify-center w-32 items-center gap-2 px-4 py-2 ml-2 font-bold text-white bg-neutral10 rounded hover:bg-neutral40 focus:outline-none focus:shadow-outline border border-neutral40"
                    type="button"
                  >
                    <img src={GoogleIcon} alt="Google" />
                    Google
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full md:w-1/2 h-screen bg-primarySurface flex flex-col">
          <div className="h-full w-full flex justify-center items-center">
            <div>
              <h1 className="text-primary font-bold text-4xl">
                Kembangkan
                <br /> Skillmu
              </h1>
              <p className="pt-5">
                Kami memiliki banyak keunggulan dibandingkan kursus
                <br /> online lainnya. Jangan ragu untuk memilih kami, kami akan
                <br /> memberikan layanan terbaik.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
