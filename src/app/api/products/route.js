import { headers } from "next/headers";
import { NextResponse } from "next/server";


// export async function GET(req){
//     console.log(req);
//     return NextResponse.json( {"msg" : "hello from next api"})
// }




// route.js

export const GET = () => {
      // to get headers
  const requestHeaders = new headers(req.headers)
  console.log(requestHeaders)

  // URL query parameter 
  const {searchParams} = new URL(req.url); // other method to do this req.nextUrl.searchParams
  console.log(searchParams)
  // to get its data
  // ?search=java 
  console.log(searchParams.get("search"))
    return NextResponse.json({ "msg": "hello from next api" });
  };
  

  // post api 

  export async function POST(req){
    // req.json to get data
    console.log("body here" , req.body)
      // const res = await req.json();
      // console.log(res)

      // to get form data

      const formData = await req.formData()
      console.log("form data" , formData)
      return NextResponse.json({ "msg": "hello from next api" });

  }