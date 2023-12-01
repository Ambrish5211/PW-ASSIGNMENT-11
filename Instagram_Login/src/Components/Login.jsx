
// eslint-disable-next-line react/prop-types
const Signup = ({onClick}) => {
  function handleSubmit (e) {
      e.preventDefault()
  }

return (
  <div className="flex items-center justify-center h-screen">
    <div className="border border-black h-110 rounded-md w-1/5 ">

   
    <h1 className="text-4xl font-mono b mb-6 text-center pt-3 ">Instagram</h1>
    <form onSubmit={handleSubmit} >
      
      <input className="border border-black m-6 mb-4 w-10/12 p-2" type="text" placeholder="Enter your Email" />{" "}
      <span>
        {" "}
        <br />
      </span>
      <input className="border border-black m-6 w-10/12 p-2" type="password" placeholder="Enter password" /> <br /> 
      <button onClick={onClick} className="border border-blue text-black bg-blue-700 w-10/12 ml-6 pointer rounded-lg p-4 text-white font-mono font-bold " type="submit"> Login</button>
    </form> <br />
    <p className="ml-6 mb-4 font-bold ">Don`t have an account? <button className=" text-blue-900 ">SignUp</button> </p>
    </div>
  </div>
);
}

export default Signup