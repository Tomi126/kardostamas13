# TableRow Komponens

## Leírás
A `TableRow` komponens egyetlen felhasználó adatait jeleníti meg egy táblázatsorban. Lehetőséget biztosít a felhasználó adatainak szerkesztésére és törlésére.

## Fő Funkciók
- Egy felhasználó adatainak megjelenítése.
- Szerkesztési mód aktiválása a felhasználó számára.
- Felhasználó törlésének lehetősége.

## Főbb Props
- `user`: Az aktuális felhasználó adatai.
- `editingId`: Az éppen szerkesztett felhasználó azonosítója.
- `editedName`: Az éppen szerkesztett felhasználó neve.
- `editedEmail`: Az éppen szerkesztett felhasználó email címe.
- `setEditedName`: A szerkesztett név állapotának frissítésére szolgáló függvény.
- `setEditedEmail`: A szerkesztett email állapotának frissítésére szolgáló függvény.
- `handleEditStart`: A szerkesztés megkezdését kezelő függvény.
- `handleEditCancel`: A szerkesztés megszakítását kezelő függvény.
- `handleUpdate`: A felhasználó adatainak frissítését kezelő függvény.
- `handleDelete`: A felhasználó törlését kezelő függvény.

## Használat
A `TableRow` komponens a következőképpen használható:

```jsx
<TableRow
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