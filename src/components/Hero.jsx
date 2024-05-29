import React from 'react'

const Hero = ({heading = 'Become a React Dev', bio = 'Find the React job that fits your skills and needs'}) => {
  return (
    <section className="bg-indigo-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            { heading }
          </h1>
          <p className="my-4 text-xl text-white">
            { bio }
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
