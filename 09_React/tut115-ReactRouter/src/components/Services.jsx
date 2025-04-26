import React from 'react'

const Services = () => {
  return (
    <div>
    <h1 className="text-4xl font-bold text-center my-8">Our Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Service 1</h2>
            <p className="text-gray-700">Description of service 1.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Service 2</h2>
            <p className="text-gray-700">Description of service 2.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Service 3</h2>
            <p className="text-gray-700">Description of service 3.</p>
        </div>
    </div>
    </div>
  )
}

export default Services
