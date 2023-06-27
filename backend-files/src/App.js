import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  const Submitform = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const user = {email, name};
    console.log(user)
    fetch('http://localhost:5000/users',{
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(getdata => {
      const newusers = [...users,getdata]
      setUsers(newusers)
    })
    .catch(error => {
      console.log(error)
    })
    form.reset()
  }
  return (
    <div className="text-center p-5 mt-5">
        <h1>Give your information</h1>
        <form onSubmit={Submitform} className="shadow-lg p-5 mt-5 rounded">
          <label htmlFor="">Email: </label>
          <input type="email" name="email"/> <br /> <br /> 
          <label htmlFor=""> Name:  </label> 
          <input type="text" name="name"/> <br /><br />
          <input type="submit" value='submit now'/>
        </form>
        <div className="details mt-5 p-5 shadow-lg">
          {
            users.map(items => <p key={items.id}>
              {items.email}
            </p>)
          }
        </div>

    </div>
  );
}

export default App;
