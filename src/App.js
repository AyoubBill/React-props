// import './App.css';
import Profile from './profile/Profile';
import image from "./photo.jpg"

function App() {

  const datas = {
    fullName: {
      firstNAme: "Ayoub",
      lastName: "BIL"
    },
    bio: "Developpeur web front-end junior",
    profession: "Pilote nomenclature etude"
  }

  return (
    <div style={{
      border: "2px solid black", 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 800,
      height: 300,
      background: "linear-gradient(#f69d3c, #3f87a6)",
      boxShadow: "10px 5px 5px rgb(180, 170, 170)"
    }}>
      <Profile 
        fullName={datas.fullName}
        bio={datas.bio}
        profession={datas.profession}
      >
        {image}
      </Profile>
    </div>
  );
}

export default App;
