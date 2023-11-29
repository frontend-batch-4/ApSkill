import logo from "../images/Logo_Apskill.svg";
import PhotoProfile from "../images/PhotoProfile.svg";
import Button from "../components/Button";

export default function Profile() {
  return (
    <>
      {/* Section Header */}
      <header className="flex items-center justify-between p-2 border-b-2 border-neutral40 bg-neutral10">
        <div className="pt-2 pl-10">
          <img className="h-6" src={logo} alt="Logo" />
        </div>
        <div className="flex-grow flex justify-center space-x-4">
          <p className="font-semibold text-primary">Beranda</p>
          <p className="font-semibold">Kelas</p>
        </div>
        <div className="flex pr-10 justify-end">
          <img
            className="h-12 rounded-full bg-Info"
            src={PhotoProfile}
            alt="Profile"
          />
        </div>
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
        </div>
      </div>
    </>
  );
}
