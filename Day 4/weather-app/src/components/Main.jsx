const KtoC = (K) => (Number(K) - 273.15).toFixed(2); // degree celcius
const KtoF = (K) => (((Number(K) - 273.15) * 9) / 5 + 32).toFixed(2); //fehranite

const Main = ({ data }) => {
    const { list, city } = data;
    // console.log(city, list);
    const { weather, main, wind,dt_txt } = list[0];// todays weather
    const date = new Date(dt_txt);
    const todayDate = dt_txt.split(" ")[0];
    console.log(todayDate);
    const todayData = list.filter((elm)=>(elm.dt_txt.split(" ")[0] === todayDate));
     console.log(todayData);
    return <main>
        <div className="head">
            <h1>{data.city.name}, {data.city.country}</h1>
            <p>{date.toString()}</p>
        </div>
        <div className="today-weather">
            <div className="current">
                <div className="temp">
                    <h5>{KtoC(main.temp)}<sup>o</sup></h5>
                    <p>{weather[0].description}</p>
                </div>
                <div className="all-extra">
                    <div className="extra">
                        <span>{KtoC(main.temp_max)}</span>
                        <span>Max</span>
                    </div>
                    <div className="extra">
                        <span>{KtoC(main.temp_min)}</span>
                        <span>Max</span>
                    </div>
                    <div className="extra">
                        <span>{wind.speed} m/s</span>
                        <span>Wind</span>
                    </div>
                    <div className="extra">
                        <span>{wind.deg}<sup>o</sup></span>
                        <span>Wind Dir</span>
                    </div>
                    <div className="extra">
                        <span>{main.humidity}%</span>
                        <span>Humidity</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
}

export default Main;