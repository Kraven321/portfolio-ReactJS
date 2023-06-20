
import './App.css'
import { Header } from './components/header/Header'
import { SectionFour } from './components/main/SectionFour'
import { SectionOne } from './components/main/SectionOne'
import SectionTree from './components/main/SectionTree'
import SectionTwo from './components/main/SectionTwo'

function App() {
 
  return (
    <div>
   <Header/>
   <SectionOne/>
   <SectionTwo/>
   <SectionTree/>
   <SectionFour/>
   </div>
  )
}

export default App
