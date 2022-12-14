import axios from 'axios';
import { useEffect, useState } from "react";
import MenuComponenetM from "./MenuComponent_mobile";

function Main(prop){
    let _menu = [];
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/menuList", {
            params: {
            site: "bs",
            lang : prop.value
            }
        })
        .then(function (response) {
            setUsers(response.data.response.data)
        }).catch(function (error) {
        }).then(function() {
        });
    }, [prop.value])

    return (
        <MenuComponenetM users={users} />
    );
}

export default Main;
