
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
   <div  id='home' >
   <SectionOne/>
   </div>
   <div id='about' >
   <SectionTwo/>
   </div>
   <div id='work'>
   <SectionTree/>
   </div>
   <div id='contact'>
   <SectionFour/>
   </div>
   </div>
  )
}

export default App
