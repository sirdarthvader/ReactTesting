import { useState } from "react";
function UserForm({onUserAdd}) {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email, name)
        onUserAdd({name, email})
    }
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <label>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button>Add User</button>
        </form>
    )
}

export default UserForm;