import './App.css';
import Post from './Post';
import ProfileCard from './ProfileCard'

const data = [
  {
    name: "Ishvari",
    rollNo: 123,
    address: "Mahalingpur,KA"
  }, {
    name: "Mohit",
    rollNo: 12,
    address: "Delhi,DL"
  }, {
    name: "Harshita",
    rollNo: 23,
    address: "Rajpura,PB"
  }, {
    name: "Swati",
    rollNo: 11,
    address: "Mahalingpur,KA"
  }, {
    name: "Rahul",
    rollNo: 33,
    address: "Kashmir"
  }
];

const postData = [
  {title:"Food Blog Post",description:"adfa;ljfaldfakf df afa  dfa fa g agae   afafasfddfasfsd"},
  {title:"New Cars has arrived",description:"fasgas  aerafd  aadfasr gagar  gaetagA GATEGADFAR AGAGAFD"},
  {title:"Someone got lottery",description:"HRADR  GAE FAR GAS GAGAHHFH  RHKDDJFFHAAJ AS FFAF AD"},
  {title:"Mukul crashed his car",description:"fasgas  aerafd  aadfasr gagar  gaetagA GATEGADFAR AGAGAFD"},
  {title:"Raju jumbed over a car",description:"fasgas  aerafd  aadfasr gagar  gaetagA GATEGADFAR AGAGAFDfasgas  aerafd  aadfasr gagar  gaetagA GATEGADFAR AGAGAFD"},
];
function App() {

  return (
    <div>
      {
        data.map((elm,i)=>{
           return <ProfileCard 
                   key={i}
                   name={elm.name} 
                   rollno={elm.rollNo} 
                   address={elm.address}
                   />
        })
      }
      <hr />
      {
        postData.map((elm,i)=>{
         return <Post key={i} title={elm.title} para={elm.description}/>
        })
      }
    </div>
  )
}

export default App
