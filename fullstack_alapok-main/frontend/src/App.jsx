import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './components/UserAdd';
import UserTable from './components/TableHeader';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [editingId, setEditingId] = useState(null);
    const [editedName, setEditedName] = useState('');
    const [editedEmail, setEditedEmail] = useState('');

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3001/api/users');
            setUsers(response.data);
            setError(null);
        } catch (err) {
            setError("Nem sikerült betölteni az adatokat. Ellenőrizze, hogy a backend fut-e.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (e, name, email, setName, setEmail) => {
        e.preventDefault();
        if (!name || !email) {
            alert("Név és email megadása kötelező.");
            return;
        }

        try {
            await axios.post('http://localhost:3001/api/users', { name, email });
            fetchData();
            setName('');
            setEmail('');
        } catch (err) {
            setError("Hiba történt a felhasználó hozzáadása közben.");
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Biztosan törlöd?")) return;

        try {
            await axios.delete(`http://localhost:3001/api/users/${id}`);
            fetchData();
        } catch (err) {
            setError("Nem sikerült törölni a felhasználót.");
        }
    };

    const handleEditStart = (user) => {
        setEditingId(user.id);
        setEditedName(user.name);
        setEditedEmail(user.email);
    };

    const handleEditCancel = () => {
        setEditingId(null);
    };

    const handleUpdate = async (id) => {
        if (!editedName || !editedEmail) {
            alert("Kötelező mezők!");
            return;
        }

        try {
            await axios.patch(`http://localhost:3001/api/users/${id}`, {
                name: editedName,
                email: editedEmail,
            });
            setEditingId(null);
            fetchData();
        } catch (err) {
            setError("Nem sikerült módosítani a felhasználót.");
        }
    };

    if (loading) return <div className="App"><p>Betöltés...</p></div>;
    if (error) return <div className="App"><p style={{ color: 'red' }}>{error}</p></div>;

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="App">
                            <h1>Felhasználókezelő (Full-Stack CRUD)</h1>
                            <UserTable
                                users={users}
                                editingId={editingId}
                                editedName={editedName}
                                editedEmail={editedEmail}
                                setEditedName={setEditedName}
                                setEditedEmail={setEditedEmail}
                                handleEditStart={handleEditStart}
                                handleEditCancel={handleEditCancel}
                                handleUpdate={handleUpdate}
                                handleDelete={handleDelete}
                            />
                        </div>
                    }
                />
                <Route
                    path="/useradd"
                    element={
                        <div>
                            <h1>Felhasználókezelő (Full-Stack CRUD)</h1>
                            <h2>Új Felhasználó Hozzáadása</h2>
                            <UserForm
                            name=""
                            email=""
                            setName={() => {}}
                            setEmail={() => {}}
                            onSubmit={(e, name, email, setName, setEmail) =>
                                handleSubmit(e, name, email, setName, setEmail)
                            }
                        />
                        </div>
                    }
                />
                <Route path="/about" element={<h1>About Page</h1>} />
                <Route path="/users" element={<h1>Users Page</h1>} />
            </Routes>
        </Router>
    );
}

export default App;