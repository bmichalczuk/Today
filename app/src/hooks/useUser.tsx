import {useState, useEffect} from "react";
import {authObserver} from "../firebase/utils";

const useUser = () => {
    const [user, setUser] = useState<any>()

    const observer = authObserver((user: any) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    })

    useEffect(() => {
       const unsubscribe =  observer()
       console.log("ifired Once");
       return unsubscribe;
    }, [user]);
    return user
};

export default useUser;