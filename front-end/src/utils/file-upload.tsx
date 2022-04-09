import axios from "axios";

export const fileUpload=async(file:any)=>{
    console.log(typeof file);
    const asd =new File([file.content],file.name)
    console.log('asd: ', typeof asd);
    console.log('file: ', file.name);
    const url='http://localhost:3000/files'
    const formData = new FormData();
    formData.append('file', asd); 
    const response=await axios.post(url, formData)
    console.log('response: ', response.data);
}