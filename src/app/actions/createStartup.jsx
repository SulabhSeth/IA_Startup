
    async function createStartupHandler(FormData)
    {
        const response = await fetch('/api/mongodb.js', {
            method: 'POST',
            body: JSON.stringify(FormData),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);

    }
 export default createStartupHandler;
