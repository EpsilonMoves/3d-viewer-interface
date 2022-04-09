import { useDispatch } from "react-redux"
import { setReducerFile } from "../reducers/current-file-slice"

interface FileName {
    fileName: string
}


export default function ClickableModelSetter({ fileName }: FileName) {

    const dispatch = useDispatch()

    const handleFileNameClick = () => {
        const urlPrefix = 'http://localhost:3000/'
        
        dispatch(setReducerFile(`${urlPrefix}${fileName}`))
    }

    return (
        <div>
            <h3 onClick={handleFileNameClick}>{fileName}</h3>
        </div>
    )
}