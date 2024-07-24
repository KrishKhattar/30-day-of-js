const response = fetch("https://api.example.com/data")

async function fetchData(){
    try{
        const data = await response
        console.log(data)
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

fetchData()