import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFilePicker } from "use-file-picker";
import { addReducerName } from "../reducers/model-names-slice";
import { fileUpload } from "../utils/file-upload";

export default function FilePicker() {
  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    accept: [".gltf"],
  });
  const dispatch = useDispatch();

  useEffect(() => {

    const handleFileUpdate = async()=>{

    
      console.log('filesContent[0]: ', filesContent[0]);
      await fileUpload(filesContent[0] )
      dispatch(addReducerName(filesContent[0].name))
    }

    if (!loading&&filesContent.length > 0) {
      handleFileUpdate()
    }
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Button variant="contained" onClick={() => openFileSelector()}>UPLOAD FILE </Button>
      <br />
     
    </div>
  );
}
