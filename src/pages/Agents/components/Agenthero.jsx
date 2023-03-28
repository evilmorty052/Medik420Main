import React from 'react'
import cbd from '../../../assets/woman.gif'

const Agenthero = () => {
  return (
    <div>
     <section
     style={{backgroundImage: `url(${cbd})`}}
  class="relative  bg-cover bg-center bg-no-repeat lg:py-8"
>
  <div class="absolute inset-0 bg-gray-600/75 "></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-3xl text-white font-extrabold sm:text-5xl">
        Meet Our Agents

        <strong class="block font-extrabold text-rose-700">

        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
      Check Back Weekly to meet the trending , best performing and recommended Agents Handpicked Just for you.
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
        {/* <a
          href="#"
          class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a> */}

        <a
          href="#"
          class="block w-full uppercase rounded bg-green-300 px-12 py-3 text-sm font-medium text-white shadow  focus:outline-none focus:ring  sm:w-auto"
        >
        Follow All
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Agenthero