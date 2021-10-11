import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const initialAuthrentication =()=>{
    initializeApp(firebaseConfig);

}

export default initialAuthrentication;