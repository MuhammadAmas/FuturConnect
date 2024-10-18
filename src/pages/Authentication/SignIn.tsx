import { Link } from 'react-router-dom';
import signinBackground from '/signin-background.png'; // Ensure the path is correct based on your project
import companyLogo from '/logo large 1.png';

const SignIn: React.FC = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${signinBackground})` }}
    >
      <img
        alt='Company Logo'
        src={companyLogo}
        className="h-12 w-auto absolute top-0 left-0 m-4" />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">

          <h2 style={{ color: '#212121' }} className="mt-4 text-center text-3xl font-extrabold leading-9 ">
            Streamline Your Space
          </h2>
          <p style={{
            color: '#212121'
          }} className="mt-2 text-center text-sm ">
            Manage your meeting rooms with ease and efficiency.
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div style={{
            background: '#F5F6F7'
          }} className=" py-8 px-6 shadow rounded-lg sm:px-10">
            <h2 className="text-center text-xl font-semibold text-gray-700">
              Sign in to your account
            </h2>
            <form className="mt-6 space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="e.g. johndoe@email.com"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                </div>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="text-sm my-4" style={{ color: '#212121', float: 'right' }}>
                  <Link
                    to="/forgot-password"
                    className="font-medium underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primaryblue py-2 px-4 text-sm font-medium text-white shadow-sm hover:shadow-1 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>
            </form>


          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
