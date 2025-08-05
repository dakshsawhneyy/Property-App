import { useNavigate } from "react-router-dom"

const PropertyCard = ({id, title, location, price, desc, image}) => {
  const navigate = useNavigate();
  return (
    <div className='border rounded p-2'>
        <img src={image} className='w-full h-48 object-cover' alt="" />
        <h2 className='text-lg'>{title}</h2>
        <h3 className=''>Location: {location}</h3>
        <p className=''>{desc}</p>
        <p className=''>Price: ${price}</p>
        <button onClick={() => navigate(`/property/${id}`)} className='bg-black text-white py-1 px-2 rounded mt-2'>View Details</button>
    </div>
  )
}

export default PropertyCard