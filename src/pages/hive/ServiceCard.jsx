import React from 'react'

const ServiceCard = () => {
        return (
          <>
            <div class="relative py-16">
              <div class="container relative m-auto px-[10px] text-gray-500 md:px-12">
                <div className="mt-4 mb-8 px-2">
                  <h3 className="text-center text-2xl text-gray-800 font-semibold">
                    All Services
                  </h3>
                  <p className="text-center text-lg sm:text-xl">
                    Please Pick from One Of The Services Below To Continue Exploring
                    One Hive
                  </p>
                </div>
                <div class="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
                  <div class="group space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
                    <img
                      class="mx-auto w-24"
                      src={hemp}
                      alt="illustration"
                      loading="lazy"
                    />
                    <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                      Capital Assistance
                    </h3>
                    <p>
                      Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at
                      cum, consectetur ullam tempora ipsa iste officia sed officiis!
                      Incidunt ea animi officiis.
                    </p>
      
                    <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
                      {"Apply"}
                    </button>
                  </div>
                  <div class="group space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
                    <img
                      class="mx-auto w-24"
                      src="https://www.pngrepo.com/png/46221/512/globe.png"
                      alt="illustration"
                      loading="lazy"
                    />
                    <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                      Crowd Funding
                    </h3>
                    <p>
                      Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at
                      cum, consectetur ullam tempora ipsa iste officia sed officiis!
                      Incidunt ea animi officiis.
                    </p>
      
                    <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
                      {"Apply"}
                    </button>
                  </div>
                  <div class="group space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
                    <img
                      class="mx-auto w-24"
                      src="https://www.pngrepo.com/png/401106/512/antenna-bars.png"
                      alt="illustration"
                      loading="lazy"
                    />
                    <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                      Invest
                    </h3>
                    <p>
                      Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at
                      cum, consectetur ullam tempora ipsa iste officia sed officiis!
                      Incidunt ea animi officiis.
                    </p>
                    <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
                      {"Get Started"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
 
}

export default ServiceCard