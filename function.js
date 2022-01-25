/**
 * this function for localstorage set data
 * @param {*} key 
 * @param {*} value 
 */

function setData(key, value){
   let data = JSON.stringify(value)
    localStorage.setItem(key, data)

};


function getData(key){

    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : false;
}