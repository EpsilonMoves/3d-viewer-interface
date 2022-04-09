/* eslint-disable */
import * as THREE from 'three'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, ObjectMap, useFrame, useLoader, useThree } from '@react-three/fiber'
import { OrbitControls, Stats, TrackballControls, useGLTF } from '@react-three/drei'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Model from './model'
import { useDispatch, useSelector } from 'react-redux'
import { selectFile, setReducerFileDetails } from '../reducers/current-file-slice'
import { Controls, useControl, withControls } from 'react-three-gui';
import './components.css'



export default function ThreeDViewer() {

    const fileFromSlicer = useSelector(selectFile)
    const dispatch = useDispatch()

    // normaly I woden't use a callback - but trying to dispatch inside the Model or load the glft otside resulted in a blank screen
    const handleFileDetails = (fileDetails: any) => {
        dispatch(setReducerFileDetails(fileDetails))
    }

    return (
        <div>
            <h4 className='transform-text'>
            Transform Controls: t: translate r: rotate s: scale q: turn off
            </h4>

            <Controls.Provider>

                <Controls.Canvas style={{ height: 600, width: 1200 }} >
                    <pointLight position={[5, 5, 5]} />
                    <spotLight
                        intensity={2}
                        position={[40, 50, 50]}
                        shadow-bias={-0.00005}
                        penumbra={1}
                        angle={Math.PI / 6}
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                        castShadow
                    />
                    <Suspense fallback={null}>
                        {fileFromSlicer !== undefined && fileFromSlicer.length > 0 ?
                            <Model file={fileFromSlicer} fileDetailsCallback={handleFileDetails} />
                            :
                            null
                        }
                    </Suspense>
                    <TrackballControls />
                </Controls.Canvas>
            </Controls.Provider>
        </div>
    )

}


