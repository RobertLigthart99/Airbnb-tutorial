import React from "react";

export const Topbar = () => {
  return (
    <header class="py-4 bg-white sm:py-5" x-data="{expanded: false}">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex items-center justify-between">
            <a href="/" title="" class="flex-grow">
              <img
                class="w-auto h-12 rounded-xl"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/meme-1534343634.jpg?resize=1600:*"
                alt=""
              />
            </a>

          {/* https://www.youtube.com/watch?v=MpQbwtSiZ7E&list=LL&index=1&ab_channel=CodingWithDawid 20:22 */}

          <div class="hidden lg:flex lg:items-center lg:space-x-4 lg:justify-center flex-grow">
            <a
              href="#"
              title=""
              class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
            >
              Anywhere
            </a>

            <a
              href="#"
              title=""
              class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
            >
              Any week
            </a>

            <a
              href="#"
              title=""
              class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
            >
              Add Guests
            </a>
          </div>

          <div class="hidden ml-auto sm:flex lg:ml-0 space-x-4 flex-grow justify-end">
            <a
              href="/login"
              title=""
              class="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-900"
              role="button"
            >
              Login
            </a>

            <a
              href="/signup"
              title=""
              class="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-white bg-gray-900 hover:bg-gray-700 rounded-full transition-all duration-200 border "
              role="button"
            >
              Sign up
            </a>
          </div>

          <div class="flex ml-4 lg:hidden">
            <button
              type="button"
              class="inline-flex items-center p-2.5 text-gray-900 duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transiton-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:bg-gray-900 focus:text-white"
              // @click="expanded = !expanded"
              // :aria-expanded="expanded"
            >
              <span x-show="!expanded" aria-hidden="true">
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>

              <span x-show="expanded" aria-hidden="true">
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
