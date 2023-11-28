import logo from "../images/Logo_Apskill.svg";
export default function Register() {
  return (
    <>
      <div className="flex h-screen">
        <section className="w-1/2 h-full bg-white">
          <div className="pt-8 pl-12">
            <img className="h-8" src={logo} alt="Logo" />
          </div>
          <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="bg-white p-8 rounded shadow-lg w-96">
              <h2 className="text-2xl font-bold mb-1 text-primary">
                Buat Akun Baru
              </h2>
              <p className="mb-6">Sudah Memiliki Akun? Masuk</p>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Nama Depan</label>
                  <input
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Masukan Email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Nama Belakang</label>
                  <input
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Masukan Email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Masukan Email"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700">Password</label>
                  <input
                    className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Masukan password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="px-4 py-2 font-bold text-neutral10 w-full bg-primary rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Masuk
                  </button>
                </div>
              </form>
              <p className="mt-6 text-center">atau</p>
              <div className="flex justify-center mt-4">
                <button
                  className="px-4 py-2 font-bold text-neutral10 bg-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Facebook
                </button>
                <button
                  className="px-4 py-2 ml-2 font-bold text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Google
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-1/2 h-full bg-primarySurface flex flex-col">
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
