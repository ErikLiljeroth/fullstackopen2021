import axios from 'axios'
const baseurl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseurl)
}

const create = newObject => {
    return axios.post(baseurl, newObject)
}

const update = (id, newObject) => {
    return axios.put(`${baseurl}/${id}`, newObject)
}

const remove = (id) => {
    return axios.delete(`${baseurl}/${id}`)
}

const personService = {getAll, create, update, remove}
export default personService