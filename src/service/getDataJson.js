import jsonData from '../Data/data.json'

export default function getDataJson(callback) {
    var data = JSON.parse(JSON.stringify(jsonData));
    callback(data)
}