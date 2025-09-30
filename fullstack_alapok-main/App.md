# App Komponens

## Leírás
Az `App` komponens az alkalmazás fő belépési pontja. Ez felelős az állapotkezelésért, az adatok betöltéséért, valamint az útvonalak (routing) kezeléséért.

## Fő Funkciók
- **Felhasználók kezelése**: Felhasználók listázása, hozzáadása, szerkesztése és törlése.
- **Routing**: Az alkalmazás különböző oldalai közötti navigáció biztosítása a `react-router-dom` segítségével.
- **Állapotkezelés**: A felhasználók adatai és a szerkesztési állapotok kezelése.

## Főbb Állapotok
- `users`: A felhasználók listája, amelyet a backendről töltünk be.
- `loading`: Betöltési állapot, amely jelzi, hogy az adatok éppen töltődnek.
- `error`: Hibaüzenetek tárolása, ha valami probléma történik.
- `editingId`: Az éppen szerkesztett felhasználó azonosítója.
- `editedName` és `editedEmail`: Az éppen szerkesztett felhasználó neve és email címe.

## Főbb Függvények
- **`fetchData`**: A felhasználók adatainak betöltése a backendről.
- **`handleSubmit`**: Új felhasználó hozzáadása.
- **`handleDelete`**: Felhasználó törlése.
- **`handleEditStart`**: Felhasználó szerkesztésének megkezdése.
- **`handleEditCancel`**: Szerkesztés megszakítása.
- **`handleUpdate`**: Felhasználó adatainak frissítése.

## Routing
Az alkalmazás az alábbi útvonalakat kezeli:
- `/`: A felhasználók táblázatát jeleníti meg.
- `/useradd`: Új felhasználó hozzáadására szolgáló űrlapot jelenít meg.
- `/about`: Egy egyszerű "About" oldal.
- `/users`: Egy egyszerű "Users" oldal.

## Használat
Az `App` komponens a `main.jsx` fájlban kerül renderelésre:

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);