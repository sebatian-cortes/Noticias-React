
import { Card } from "./components/Card/Card"
import { Header } from "./components/Layouts/Header/Header"
import { Main } from "./components/Layouts/Main/Main"
import { Section } from "./components/Layouts/Section/Section"
import { Home } from "./components/Pages/Home/Home"
import {News} from './components/JS/News'





function App() {
  return (
    <Home>
      <Header />
      <Main>
        <Section>
          <Card/>
        </Section>

        <Section>

        </Section>
      </Main>

    </Home>
  )
}

export default App
