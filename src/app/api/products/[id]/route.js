import { NextResponse } from "next/server";

// export const GET = async  (r , c)=>{
//     console.log("req" , r);
//     console.log("c" , c )
//     console.log("c.params" , c.params )
//     console.log("c.p.i" , c.params.id )

//     return NextResponse.json({"me":"suc"})
// }


// destructure the c 

export const GET = async  (r , {params})=>{
    console.log("req" , r);
    // console.log("c" , c )
    console.log("c.params" ,params )
    console.log("c.p.i" , params.id )

    return NextResponse.json({"me":"suc"})
}