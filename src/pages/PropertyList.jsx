import { useNavigate } from "react-router-dom"
import PropertyCard from "../components/propertyCard"

const PropertyList = () => {

  // Fetch Properties Array From Local Storage
  const properties = localStorage.getItem('properties');

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl font-bold my-8">Property List</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {properties ? JSON.parse(properties).map((item) => (
          <PropertyCard key={item.id} title={item.title} location={item.location} price={item.price} desc={item.description} image={item.image} />
        )) : (
          <p className='text-center'>No properties available</p>
        )}
      </div>
      <div className='flex justify-center mt-8'>
        <button onClick={() => navigate('/add')} className='bg-black text-white py-2 px-4 rounded' >Add Property</button>
      </div>
    </div>
  )
}

export default PropertyList