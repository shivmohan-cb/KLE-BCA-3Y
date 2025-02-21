import { useEffect, useState } from "react"
import SearchBar from "./components/Search"
import Main from "./components/Main";

const API_Key = "b1b15e88fa797225412429c1c50c122a1";
const URI = (cityname) => `http://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${API_Key}`;

function App() {
  const [cityName, setCityName] = useState("New Delhi");//
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData(cityName) {
      try {
        const data = await fetch(URI(cityName));// data fetching
        const json = await data.json();// json data from promise body
        setData(json);
      } catch (err) {
        console.log(err);
      }
    }
    if (cityName) fetchData(cityName);
  },
    [cityName]// dependency
  );
  return (
    <>
      <SearchBar
        updateSearch={(value) => { setCityName(value) }}
      />
      {
        data?.cod==200 ? 
        <Main data = {data} /> : <center><div>City Not Found</div></center>
      }
    </>
  )
}

export default App
