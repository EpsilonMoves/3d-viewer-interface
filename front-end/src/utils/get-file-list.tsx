import axios from "axios";

export const getFileList = async() =>{

    let files= ['']

    try {
        const url = 'http://localhost:3000/files'
        const {data}= await axios.get(url)
        files=[...data]
    } catch (error) {
        console.log('error: ', error);
    }


    return files
}