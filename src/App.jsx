import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import  Card from './components/Card'



function App() {
  const [count, setCount] = useState(0)
let myObj={
  usernanme:"hitesh",
  age:21
}
  return (
    <>
    {/* // channel,someObj these are known as props that are send to to card.jsx and it uses these as it properties   */}
    {/* //function card(props){
    console.log("props",props.username)
    is equivalent to 
    function card({username}){
    console.log(username)
    basically they can be used as variables
    
    */}
    <h1 className='bg-green-400'>Tailwindcss</h1>
    <Card username="chaiaurcodee" btnText="click me" />
    <Card username="heheh"/>
    
    </>
  )
}

export default App
