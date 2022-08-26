import teamData from './teamData'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  console.log(teamData)
  const teamImages = teamData.map(member => {
    return <img 
              key={member.key} 
              src={`/images/Team/${member.profilePic}`} 
              style={{height: "100px", width: "100px"}} 
    />
  })
  console.log(teamImages)
  return (
    <div className="App">
      <Navbar />
      {teamImages}
    </div>
  )
}

export default App
