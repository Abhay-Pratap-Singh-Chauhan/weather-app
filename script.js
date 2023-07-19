 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cb6d1a5391mshd11615c094a9c73p1edb30jsn8743c29b2a83',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getweather=(city)=>{


cityname.innerHTML=city

let response= fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
response.then((value)=>{

    return value.json()
}).then((response)=>{
     

      	// cloud_pct.innerHTML=response.cloud_pct
        temp.innerHTML=response.temp
        // feels_like.innerHTML=response.feels_like
        humidity.innerHTML=response.humidity
        min_temp.innerHTML=response.min_temp
        max_temp.innerHTML=response.max_temp
        wind_speed.innerHTML=response.wind_speed
        wind_degrees.innerHTML=response.wind_degrees
        sunrise.innerHTML=response.sunrise
        sunset.innerHTML=response.sunset
      
    console.log(response)



})



}



submit.addEventListener('click',(e)=>{

    e.preventDefault()// FOR NOT LOADING
	getweather(city.value)
})

getweather("delhi")
