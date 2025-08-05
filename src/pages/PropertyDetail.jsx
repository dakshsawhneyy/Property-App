import { useParams } from "react-router-dom"

const PropertyDetail = () => {
  
  // With help of use params, fetch id from the url
  const { id } = useParams();
  
  // Fetch the property details from local storage using the id
  const properties = JSON.parse(localStorage.getItem('properties'));
  const property = properties.find(p => p.id === id);
  console.log(property);

  return (
    <div className="">

    </div>
  )
}

export default PropertyDetail