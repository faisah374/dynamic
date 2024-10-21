import Link from "next/link";
export default function CountryName({params}){
  type countryDta={
    name:string,capital:string,population:number
  } 
  
  
  const countryDta: countryDta []=[
   { 
    name:"pakistan",
    capital:"Islamabad",
     population:241495112,
    },

      {
        name:"India",
        capital:"Delhi",
        population: 1454779943
    },

      {
        name:"Iran",
        capital:"Thran",
        population: 91820389
    },

      {
        name:"Sudiarab",
        capital:"Ryhad",
        population:34141200
    },

      {
        name:"England",
        capital:"lodon",
        population: 69261000
    }

  ]


const country=countryDta.find((c)=>c.name.toLowerCase()===params.country_name.toLowerCase());
if (!country) {
    return <h1>Name:{params.country_name} country not found</h1>
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