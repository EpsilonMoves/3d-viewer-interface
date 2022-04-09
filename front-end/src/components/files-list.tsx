import { Paper } from "@mui/material"
import { useSelector } from "react-redux"
import { selectNames } from "../reducers/model-names-slice"
import ClickableModelSetter from './clickable-model-setter'

export default function FilesList() {

    const modelNamesFromSlicer = useSelector(selectNames)

    return (
        <Paper elevation={3} className='component-paper-root'>
            <h3>SELECT FILE</h3>
            {(modelNamesFromSlicer as string[]).map((element, index) => {
                return (<div key={index}><ClickableModelSetter  fileName={element}/></div>)
            })}
        </Paper>
    )
}