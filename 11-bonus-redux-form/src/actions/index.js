// json-server --watch db.json --port 3004
const URL = `http://localhost:3004`

export function getMessages(){
    const request = fetch(`${URL}/messages`, { method: 'GET'})
                    .then(response => response.json());
    return {
        type:'GET_MESSAGES',
        payload:request
    }
}



export function addMessage(values,cb){

     const request = fetch(`${URL}/messages`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
        }).then(
          //  () => cb()
        )

        return {
            type:'ADD_MESSAGE',
            payload:'everything went fine'
        }

}
