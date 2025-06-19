const btnEl = document.getElementById("btn");

btnEl.addEventListener("click", getJoke);


// Replace 'YOUR_API_KEY' with your actual API key
const apikey = "iZQhbRbzyWleJtSZ77AWYg==7WB6Fnh2ArQxVyfq";

const jokeEl = document.getElementById("joke");

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    }
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes";

async function getJoke() {
    try {
        jokeEl.innerText = "updating..."
        btnEl.disabled = true;
        btnEl.innerText = "loading..."
       
        const response = await fetch(apiURL, options);
        const data = await response.json();
         btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        
        jokeEl.innerText = data[0].joke;

        
    } catch (error) {
        jokeEl.innerText = "An error happened, please try again later";
    }
}







