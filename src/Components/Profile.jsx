import useData from "../utils/zustand";
import SetEdit from "./SetEdit";
import style from "./style/Profile.module.css";
import img from "../assets/Login_bg.jpg"

export const Profile = () => {
    const { data } = useData();
    return (
        <div className={style.container}>
            <div className={style.header}>

                <h1>Profile</h1>
                <SetEdit />
            </div>
            <div className={style.profile}>
                <img src={img} alt="profile photo" />
                <div className={style.info}>
                    <h2>{data.name}</h2>
                    <p>{data.email}</p>
                </div>
            </div>
        </div>
    )
}