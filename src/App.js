import { ChakraProvider } from '@chakra-ui/react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <ChakraProvider>
        <Nav />
        <Header />
        <Main />
        <Footer />
    </ChakraProvider>
  )
}

export default App;
