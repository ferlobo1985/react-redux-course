
const URL_ROOT = 'http://localhost:3004'


export function getCars(keyword){
  const request = fetch(`${URL_ROOT}/carsIndex?q=${keyword}`, { method: 'GET'})
                  .then(response => response.json());
  return{
    type: 'SEARCH_CARS',
    payload:request
  }
}

export function carDetail(id){
  const request = fetch(`${URL_ROOT}/carsIndex?id=${id}`, { method: 'GET'})
                  .then(response => response.json());

  return{
    type: 'CAR_DETAIL',
    payload:request
  }
}

export function clearDetail(){
    return{
      type:'CLEAR_DETAIL',
      payload:[]
    }
}