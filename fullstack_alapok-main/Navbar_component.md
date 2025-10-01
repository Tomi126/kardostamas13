# Navbar Komponens

## Leírás
A `Navbar` (navigációs sáv) egy olyan komponens, amely lehetővé teszi az alkalmazás különböző oldalai közötti navigációt. A navigációs sáv általában az oldal tetején helyezkedik el, és linkeket tartalmaz, amelyek más oldalakra vezetnek.

A `Navbar` komponens a React-Bootstrap könyvtár segítségével lett kialakítva, amely modern és reszponzív dizájnt biztosít.

---

## Fő Funkciók
- **Navigáció**: Linkeket biztosít az alkalmazás különböző oldalaihoz, például a kezdőlaphoz vagy az új felhasználók hozzáadásához.
- **Reszponzív dizájn**: A navigációs sáv mobilbarát, és kisebb képernyőkön automatikusan összeomlik egy "hamburger menüvé".
- **Egyszerű használat**: Könnyen testreszabható és bővíthető további linkekkel.

---

## Főbb Elemei
1. **`Navbar`**: A navigációs sáv fő konténere.
2. **`Navbar.Brand`**: Az alkalmazás neve vagy logója, amely általában a kezdőlapra mutat.
3. **`Navbar.Toggle`**: Egy gomb, amely kisebb képernyőkön megjeleníti vagy elrejti a navigációs menüt.
4. **`Navbar.Collapse`**: A navigációs linkeket tartalmazó rész, amely összeomlik kisebb képernyőkön.
5. **`Nav`**: A navigációs linkek csoportja.
6. **`Nav.Link`**: Egy-egy navigációs link, amely egy adott oldalra mutat.

---

## Példa Kód
Az alábbi kód egy egyszerű `Navbar` komponenst mutat be:

```jsx
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Kezdőlap</Nav.Link>
            <Nav.Link href="/useradd">Felhasználók hozzáadása</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;