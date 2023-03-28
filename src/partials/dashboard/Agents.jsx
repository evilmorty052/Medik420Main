import React from 'react'

const Agents = () => {
  return (
    <div className='shadow-3xl font-poppins'>
        <article class="rounded-xl border border-gray-700 bg-gray-800 p-4">
  <div class="flex items-center">
    <img
      alt="Developer"
      src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
      class="h-16 w-16 rounded-full object-cover"
    />

    <div class="ml-3">
      <h5 class="text-lg font-medium text-white">Agent Spotlight</h5>

      <div class="flow-root">
        <ul class="-m-1 flex flex-wrap items-center">
          
          <li class="p-1 leading-none">
            <a href="#" class="text-xs uppercase font-medium text-gray-300"> Specialties: </a>
          </li>
          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-gray-300"> CRYPTO </a>
          </li>

          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-gray-300"> CBD </a>
          </li>

          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-gray-300">STOCKS</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li>
      <a
        href="#"
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <h5 class="font-medium text-white">Weekly Recommendation</h5>

        <p class="mt-1 text-xs font-medium text-gray-300">
          Meet Our Spotlight Agent Of the week Claire! currently ranked 3rd on our Agents Ranking . Clair quickly climbed up from 8th with over 11m in profits for her followers!
        </p>
      </a>
    </li>

    <li>
      <a
        href="#"
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <h5 class="font-medium text-white">Claire Mac</h5>

        <p class="mt-1 text-xs font-medium text-gray-300">
         Claire Mac specializes in Crypto trade and CBD Stocks with over 10 years of experience Follow Claire to get a two way portfolio.
        </p>
      </a>
    </li>
  </ul>
</article>

    </div>
  )
}

export default Agents