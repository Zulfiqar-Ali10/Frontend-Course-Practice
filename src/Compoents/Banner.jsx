import { ArrowRight } from 'lucide-react'

export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to dive in??</span>
              <span className="block text-yellow-300">Start your free trial today.</span>
            </h2>
            <p className="mt-3 max-w-md text-lg text-gray-200 sm:text-xl md:mt-5 md:max-w-3xl">
              Join thousands of satisfied customers who have transformed their business with our cutting-edge solutions.
            </p>
            <div className="mt-8 flex">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-300 hover:bg-yellow-400 transition duration-300"
                >
                  Get started
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                </a>
              </div>
              <div className="ml-3 inline-flex">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yellow-300 bg-purple-800 hover:bg-purple-900 transition duration-300"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="mx-auto rounded-lg shadow-xl"
              src="https://t3.ftcdn.net/jpg/07/26/68/64/360_F_726686412_304XIt6BouicT2zFZxNShwmw0mHLyySC.jpg"
              alt="Dashboard preview"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  )
}