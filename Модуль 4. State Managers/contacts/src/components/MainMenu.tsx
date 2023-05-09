import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const MainMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand
          style={{
            color: 'black',
          }}
        >
          <NavLink to="/">
            <h1>Книга контактов</h1>
          </NavLink>
        </Navbar.Brand>
        <Nav className="me-auto d-flex gap-2 ">
          <NavLink to="/groups">Группы</NavLink>
          <NavLink to="/favorit">Избранное</NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

