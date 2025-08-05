import { useNavigate } from "react-router-dom"
import PropertyCard from "../components/propertyCard"
import { useState } from "react";

const PropertyList = () => {

  // Fetch Properties Array From Local Storage
  const properties = localStorage.getItem('properties');

  const navigate = useNavigate();

  // making states for filtered searches
  const [locationFilter, setLocationFilter] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  // filter products based on filters used -- to show property, all these properties should be true
  const filteredProducts = JSON.parse(properties).filter((property) => {
    const matchLocation = property.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchMin = minPrice ? property.price >= minPrice : true;  // if no minPrice, then allow all
    const matchMax = maxPrice ? property.price <= maxPrice : true;
    return matchLocation && matchMin && matchMax;   // product will be shown only when all 3 criteria matches
  })

  return (
    <div>
      <h1 className="text-3xl font-bold my-8 text-center">Property List</h1>
      <div className="flex flex-col md:flex-row gap-5 m-5">
        <input type="text" placeholder="Search By Location" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className="py-2 px-1 w-[300px] border" />
        <input type="number" placeholder="minPrice" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="py-2 px-1 w-[300px] border" />
        <input type="number" placeholder="maxPrice" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="py-2 px-1 w-[300px] border" />
      </div>
      {filteredProducts == 0 && <p>No property</p> }
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-3'>
        {properties ? filteredProducts.map((item) => (
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