# UserAdd Komponens

## Leírás
A `UserAdd` komponens egy űrlapot biztosít, amely lehetővé teszi új felhasználók hozzáadását az alkalmazásban. Az űrlap tartalmazza a felhasználó nevét és email címét, amelyeket a backendhez küld.

## Fő Funkciók
- Új felhasználók adatainak bevitele.
- Az adatok validálása (pl. név és email megadása kötelező).
- Az adatok elküldése a backendhez.

## Főbb Props
- `name`: A felhasználó neve.
- `email`: A felhasználó email címe.
- `setName`: A név állapotának frissítésére szolgáló függvény.
- `setEmail`: Az email állapotának frissítésére szolgáló függvény.
- `onSubmit`: Az űrlap elküldését kezelő függvény.

## Használat
A `UserAdd` komponens a következőképpen használható:

```jsx
<UserAdd
  name={name}
  email={email}
  setName={setName}
  setEmail={setEmail}
  onSubmit={handleSubmit}
/>