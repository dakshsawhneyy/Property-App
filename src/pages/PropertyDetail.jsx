import { useNavigate, useParams } from "react-router-dom"

const PropertyDetail = () => {
  
  // With help of use params, fetch id from the url
  const { id } = useParams();
  
  const navigate = useNavigate();

  // Fetch the property details from local storage using the id
  const properties = JSON.parse(localStorage.getItem('properties'));
  const property = properties.find(p => p.id === id);
  console.log(property);

  return (
    <div className="">
      <img src={property.image} alt={property.title} className="w-full md:w-[50%] ml-auto mr-auto md:mt-5 h-64 md:h-72 object-cover" />
      <h1 className="text-center m-5 text-xl md:text-3xl font-bold">{property.title}</h1>
      <div className="flex flex-col md:flex-row justify-around items-center gap-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Location: {property.location}</h3>
          <p className="text-md">Price: ${property.price}</p>
          <p className="text-md">Description: {property.description}</p>
        </div>
        <button className="bg-black text-white py-2 px-4 rounded mt-5 md:mt-0" onClick={() => navigate('/')}>Go Back</button>
      </div>
    </div>
  )
}

export default PropertyDetail