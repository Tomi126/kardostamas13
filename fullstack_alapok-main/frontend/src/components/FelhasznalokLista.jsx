// components/UserTable.jsx
import React from 'react';
import UserRow from './UserRow';



function UserTable({
    users,
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
        <div>
            <h2>Felhasználók Listája</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th class='userTableHeader' >#ID</th>
                        <th class='userTableHeader' >Név</th>
                        <th class='userTableHeader' >Email</th>
                        <th class='userTableHeader' >Regisztráció</th>
                        <th class='userTableHeader' >Műveletek</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map(user => (
                            <UserRow
                                key={user.id}
                                user={user}
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
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" class='NoUserStyle'>Nincsenek felhasználók az adatbázisban.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;
