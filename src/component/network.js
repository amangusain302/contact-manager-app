import axios from "axios"

const baseUrl = "http://localhost:5000/contact";
export const addContactOnServer = async(name, email) => {
    try {
        const { data } = await axios.post(`${baseUrl}/create`, { name, email });
        return data;
    } catch (err) {
        console.log(err)
    }
};

export const displayContactFromServer = async() => {
    try {
        const { data } = await axios.get(`${baseUrl}/get`);
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const updateContactFronServer = async(contactData, id) => {
    console.log(contactData, id, "data id ")
    try {
        const { data } = await axios.put(`${baseUrl}/update?id=${id}`, contactData);
        return data;
    } catch (err) {
        console.log(err)
    }
}

export const deleteContactFromServer = async(id) => {
    try {
        const { data } = await axios.delete(`${baseUrl}/delete?id=${id}`)
        return data;
    } catch (err) {
        console.log(err);
    }
}