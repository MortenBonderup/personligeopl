import { Link } from "react-router-dom";
import styles from "../views/styles.module.css";
import Logout from "./Logout";

export default function SubNav() {
    return (
        <div className={styles.subnav}>
            <Link to="/admin">Posts</Link>
            <Link to="/create">Create</Link>
            <Logout />
        </div>
    );
}
