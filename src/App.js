import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import NewContact from './Pages/Contacts/New'
import ContactDetails from './Pages/Contacts/Details'
import { Provider } from 'react-redux'
import StyleGlobal, { Main, Container } from './styles'
import store from './Store'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/create',
    element: <NewContact />
  },
  {
     path: '/details',
     element: <ContactDetails />
  }
])

function App() {
  return (
    <Provider store={store}>
    <StyleGlobal />
    <Main>
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Main>
  </Provider>
  );
}

export default App;
