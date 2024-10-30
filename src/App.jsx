import './App.css'
import FormReference from './components/ReferenceForm/FormReference';
// import StatefulForm from './components/State-Form/StatefulForm';

function App() {

    // const handleSubmit = e => {
    //   e.preventDefault()
    //   console.log(e.target.name.value);
    //   console.log(e.target.email.value);
    //   console.log(e.target.phone.value);
    // }
 
  return (
    <>
      {/* <h1 className='text-5xl font-bold text-center my-6'>Form Submit</h1>
      <h2 className='text-2xl font-bold my-4'>Using form tag and onSubmit handler with event form e access e.target</h2>
     <form onSubmit={handleSubmit}>
        <input placeholder='Enter' className='border' type="text" name="name" id="" />
        <input placeholder='Enter' className='border' type="email" name="email" id="" />
        <input placeholder='Enter' className='border' type="text" name="phone" id="" />
        <input className='border' type="submit" value="Submit" />
     </form> */}
     {/* <StatefulForm></StatefulForm> */}
    <FormReference></FormReference>
    </>
  )
}

export default App
