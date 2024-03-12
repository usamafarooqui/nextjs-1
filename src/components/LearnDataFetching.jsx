async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    if(!res){
        return "not possib;e"
    }
    return res.json()

}

const LearnDataFetching = async() => {
    const data  = await getData()
    console.log(data)
  return (
    <>
        {
            data.map((item , i)=>(
                <div key={i}>
                    <h3>{item.title}</h3>
                    <h5>{item.body}</h5>
                </div>
            ))
        }
    </>
  )
}

export default LearnDataFetching