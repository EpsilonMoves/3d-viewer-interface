import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ThreeDViewer from "../../components/3-d-viewer";
import FileDetails from "../../components/file-details";
import FilePicker from "../../components/file-picker";
import FilesList from "../../components/files-list";
import { setReducerName } from "../../reducers/model-names-slice";
import { getFileList } from "../../utils/get-file-list";
import './main-page.css'

export default function MainPage() {

    const dispatch = useDispatch();

    useEffect(()=>{

        const handleUpdateFileList = async ()=>{

             const filesArr = await getFileList()
             console.log('filesArr: ', filesArr);
             dispatch(setReducerName(filesArr))
        }


        handleUpdateFileList()
    })

    return (
        <div className="root">
            <div>
                <ThreeDViewer />
            </div>
            <div>
                <FilePicker />
                <FileDetails/>
                <FilesList />
            </div>

        </div>
    );
}