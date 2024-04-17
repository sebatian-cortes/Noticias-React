
import { Card } from "./components/Card/Card"
import { Header } from "./components/Layouts/Header/Header"
import { Main } from "./components/Layouts/Main/Main"
import { Section } from "./components/Layouts/Section/Section"
import { Home } from "./components/Pages/Home/Home"
import {News} from './components/JS/News.js'
import { New } from "./components/New/New"






function App() {
  return (
    <Home>
      <Header />
      <Main>
        <Section style='bg-slate-500 border-slate-900 w-6/12 max-h flex justify-center flex-col items-center gap-4'>
          <Card/>
        </Section>

        <Section style='bg-slate-600 border-slate-900 w-6/12 max-h flex justify-center flex-col items-center gap-11'>
        {
          News.map(network=>(<New img={network.img} date={network.date} description={network.description}/>))
        }
        </Section>
      </Main>

    </Home>
  )
}

export default App
