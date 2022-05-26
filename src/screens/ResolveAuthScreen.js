import React, {useContext,useEffect} from 'react';
import { Context as Authcontext } from '../context/AuthContext';

const ResolveAuthScreen = () => {
    const {tryLocalSignin} = useContext(Authcontext);

    useEffect(() => {
        tryLocalSignin();
    },[]) 

    return null;
}

export default ResolveAuthScreen;