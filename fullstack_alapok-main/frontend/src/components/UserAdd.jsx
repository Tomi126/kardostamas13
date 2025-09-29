// components/UserForm.jsx
import React from 'react';



function UserForm({ name, email, setName, setEmail, onSubmit }) {
    return (
        <form onSubmit={onSubmit} id='addForm'>
            <h2>Add meg a felhasználó adatait</h2>
            <input id='nevInput'
                type="text"
                placeholder="Név"
                value={name}
                onChange={e => setName(e.target.value)}

            />
            <input id='emailInput'
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button id='hozzaadBtn' type="submit">Hozzáadás</button>
        </form>
    );
}

export default UserForm;
