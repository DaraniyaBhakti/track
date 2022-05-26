import { concat } from "react-native-reanimated";
import createDataContext from "./createDataContext";

const locationRducer = (state,action) => {
    switch(action.type){
        case 'add_current-location':
            return {...state,currentLocation :action.payload}
        default:
            return state;
    }
}

const startRecording = dispatch => {

}

const stopRecording = dispatch => {

}

const addLocation = dispatch => {

    dispatch({type:'add_current-location', payload:location})
}

export const {Contet, Propvider} = createDataContext(
    locationRducer,
    {startRecording, stopRecording, addLocation},
    { recording : false, locations:[], currentLocation:null}
)