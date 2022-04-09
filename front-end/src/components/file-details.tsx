import { Paper } from "@mui/material"
import { useSelector } from "react-redux"
import { selectFileDetailes } from "../reducers/current-file-slice"

export default function FileDetails() {

    const { sizeX, sizeY, sizeZ, verticesNum } = useSelector(selectFileDetailes)

    return (
        <Paper className='component-paper-root'>
            <div>{`vertices: ${verticesNum}`}</div>
            <div>{`size X: ${sizeX}`}</div>
            <div>{`size Y: ${sizeY}`}</div>
            <div>{`size Z: ${sizeZ}`}</div>
        </Paper>
    )
}