// components/UserRow.jsx
import React from 'react';



function UserRow({
    user,
    editingId,
    editedName,
    editedEmail,
    setEditedName,
    setEditedEmail,
    handleEditStart,
    handleEditCancel,
    handleUpdate,
    handleDelete
}) {
    return (
        <tr>
            <td class='tableCell'>{user.id}</td>

            {editingId === user.id ? (
                <>
                    <td class='tableCell'>
                        <input
                            type="text"
                            value={editedName}
                            onChange={e => setEditedName(e.target.value)}
                        />
                    </td>
                    <td class='tableCell'>
                        <input
                            type="email"
                            value={editedEmail}
                            onChange={e => setEditedEmail(e.target.value)}
                        />
                    </td>
                </>
            ) : (
                <>
                    <td class='tableCell'>{user.name}</td>
                    <td class='tableCell'>{user.email}</td>
                </>
            )}

            <td class='tableCell'>{new Date(user.created_at).toLocaleDateString()}</td>

            <td class='tableCell'>
                {editingId === user.id ? (
                    <>
                        <button onClick={() => handleUpdate(user.id)}>Mentés</button>
                        <button onClick={handleEditCancel} >Mégse</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => handleEditStart(user)} class='editButton'>Szerkesztés</button>
                        <button onClick={() => handleDelete(user.id)} className='deleteButton'>Törlés</button>
                    </>
                )}
            </td>
        </tr>
    );
}

export default UserRow;