const PropertyCard = ({title, location, price, desc, image}) => {
  return (
    <div className='border'>
        <img src={image} className='w-full h-48 object-cover rounded' alt="" />
        <h2 className='text-lg'>{title}</h2>
        <h3 className=''>Location: {location}</h3>
        <p className=''>{desc}</p>
        <p className=''>Price: ${price}</p>
    </div>
  )
}

export default PropertyCard