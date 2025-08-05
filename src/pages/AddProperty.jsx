import { useState } from "react"

const AddProperty = () => {

// Creating state for a property, so we can use as a whole
const [property, setProperty] = useState({
  title: '',
  location: '',
  price: '',
  description: '',
  image: ''
});

  // console.log(property['title'])
  // console.log(image)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const randomID = Math.random().toString(6).substr(2,5);
    
    // Adding id to property object
    const newProperty = {
      ...property,
      id: randomID
    }
    
    // Need to use an array, if not then values will overwrite each other
    //  fetch properties array from local storage, if not then create one
    const existing = JSON.parse(localStorage.getItem('properties')) || [];
    const updated = [...existing, newProperty];

    // Again Set to local storage
    localStorage.setItem('properties', JSON.stringify(updated))

    setProperty({
      title: '',
      location: '',
      price: '',
      description: '',
      image: ''
    });
  }

  // console.log(property)

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col gap-5 justify-center items-center h-screen'>
        <h1 className="text-3xl font-bold my-8">Add Property</h1>
        {/* Using ...property because going to next field, prev fields data doesnt gets lost */}
        <input placeholder='Title (e.g., "2 BHK Flat in Jammu")' onChange={(e) => setProperty({...property, title:e.target.value})} type='text' id='title' className='py-2 px-1 w-[300px] border' required />
        <input placeholder='Location' type='text' id='location' onChange={(e) => setProperty({...property, location:e.target.value})} className='py-2 px-1 w-[300px] border' required />
        <input placeholder='Price' type='number' id='price' onChange={(e) => setProperty({...property, price:e.target.value})} className='py-2 px-1 w-[300px] border' required />
        <input placeholder='Description' onChange={(e) => setProperty({...property, description:e.target.value})} type='text' id='desc' className='py-2 px-1 w-[300px] border' required />
        <input placeholder='Image'  type='text' id='image' onChange={(e) => setProperty({...property, image:e.target.value})} className='py-2 px-1 w-[300px] border' required />
        <button type="submit" className="text-white bg-black py-2 px-2 rounded">Submit</button>
      </div>
    </form>
  )
}

export default AddProperty