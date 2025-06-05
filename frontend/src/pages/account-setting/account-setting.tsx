import source from 'assets/man.png';
import photo from 'assets/photo.png';

function AccountSetting() {
  return (
    <>
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-8 mt-24 ">
          <label className="relative flex">
            <input type="file" name="photo" className="invisible w-0" />
            <img
              src={source}
              alt="user"
              className="w-[160px] h-[160px] object-cover rounded-[102px] brightness-50"
            />
            <img
              src={photo}
              alt="photo"
              className="absolute left-0 right-0 mx-auto w-fit bottom-[43%]"
            />
          </label>

          <div>
            <h1 className="text-4xl mb-3.5">{'John Doe'}</h1>
            <p className="max-w-96 text-2xl text-secondary">
              I don’t know about you but I love pizza. Especially when that pizza comes with Papa
              John’s very own garlic pizza sticks.
            </p>
          </div>
        </div>
      </div>
      <div className="order-1 w-full bg-white p-8">
        <h2 className="font-bold text-2xl ">Personal information</h2>

        <div className="max-w-md space-y-6 pt-8">
          <div className="flex">
            <p className="text-gray-600 w-1/4">Name</p>
            <p className="font-medium mr-3">John Doe</p>
            <button className="text-primary hover:underline ">change</button>
          </div>

          <div className="flex">
            <p className="text-gray-600 w-1/4">Email</p>
            <p className="font-medium mr-3">testmail@test.com</p>
            <button className="text-primary hover:underline">change</button>
          </div>

          <div className="flex  items-center">
            <p className="text-gray-600 w-1/4">Password</p>
            <button className="px-3.5  py-1.5 border border-gray-300 rounded-lg ">
              Change password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountSetting;
