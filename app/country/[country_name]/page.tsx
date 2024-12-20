"use client"
import Link from "next/link";
export default function CountryName({params}:{params: {country_name:string}}){

  type countryDta={
    name:string,
    capital:string,
    population:number
  } 
  
  
  const countryDta: countryDta []=[
   { 
    name:"pakistan",
    capital:"Islamabad",
     population:241495112,
    },

      {
        name:"india",
        capital:"Delhi",
        population: 1454779943
    },

      {
        name:"iran",
        capital:"Thran",
        population: 91820389
    },

      {
        name:"sudiarb",
        capital:"Ryhad",
        population:34141200
    },

      {
        name:"england",
        capital:"lodon",
        population: 69261000
    }

  ]


const country=countryDta.find((c)=>c.name.toLowerCase()===params.country_name.toLowerCase());
if (!country) {
    return <h1>Name:{params.country_name} country not found.please check parmeter name in the urL.</h1>
}


return(
<div className="text center m-10 bg-gary-500 rounded-lg">
  <div className="text-white text-center text-xl p-4">
    
 < h1 className="m-4">Name:{country.name}</h1>
 <h1 className="m-4">capital:{country.capital}</h1>
 <h1 className="m-4">population:{country.population}</h1>
<Link href="/country" className="m-2 p-3 bg-pink-600 rounded-md text-base">Back to country list</Link>
  </div>
 </div>
)
}