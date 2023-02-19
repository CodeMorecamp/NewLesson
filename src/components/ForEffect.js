import { useEffect, useState } from "react";

function ForEffect () {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setUsers(json))
    }, [])
    return (
      <div>
        <h1>Users</h1>
         <div>
            {users.map((user) => (
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.website}</p>
                    <p>{user.phone}</p>            
                </div>
            ))}
        </div>   
      </div>  
    )
}

export default ForEffect