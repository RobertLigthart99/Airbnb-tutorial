import axios from "axios";
import React, { useState } from "react";
import { Topbar } from "../components/Topbar";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser(ev) {
    ev.preventDefault();
    axios.get('https://localhost:4000/test')
  }

  return (
    <>
      {/* <Topbar /> */}
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-24 w-auto rounded-xl"
              src="https://straatwoordenboek.nl/storage/attachments/zVhgTOzHlHdOLgr1H2Exesw0YowjgcbEk961vVYv.jpg"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up for an account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              <a href="#" className="text-gray-600 hover:text-gray-500">
                Enter your credentials below in order to login
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={registerUser}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="full-name"
                  name="Full name"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Full name"
                  value={name}
                  onChange={ev => setName(ev.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={ev => setEmail(ev.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={ev => setPassword(ev.target.value)} 
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-full border border-transparent bg-gray-900 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
