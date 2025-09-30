# TableHeader Komponens

## Leírás
A `TableHeader` komponens egy táblázatot jelenít meg, amely a felhasználók adatait tartalmazza. A táblázat lehetőséget biztosít a felhasználók adatainak szerkesztésére és törlésére.

## Fő Funkciók
- Felhasználók adatainak megjelenítése táblázatos formában.
- Felhasználók szerkesztése és törlése.
- Dinamikus táblázatsorok megjelenítése a kapott adatok alapján.

## Főbb Props
- `users`: A felhasználók listája.
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
A `TableHeader` komponens a következőképpen használható:

```jsx
<TableHeader
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