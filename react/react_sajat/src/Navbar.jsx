import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ContainerOutsideExample() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/regisztracio">Regisztráció</Navbar.Brand>
          <Navbar.Brand href="/regiok">Régiók</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;