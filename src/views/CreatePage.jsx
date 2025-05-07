import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { firebaseUrl } from "../firebase";
import SubNav from "../components/SubNav";
import styles from "./styles.module.css";

export default function CreatePage() {
    const navigate = useNavigate();

    async function createPost(newPost) {
        const url = `${firebaseUrl}/posts.json`;

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(newPost)
        });
        if (response.ok) {
            const data = await response.json();
            console.log("New post created: ", data);
            navigate("/admin");
        } else {
            console.log("Sorry, something went wrong");
        }
    }

    return (
        <>
        <SubNav />
        <section className={styles.page}>
            <h1>Create New Post</h1>
            <PostForm savePost={createPost} />
        </section>
        </>
    );
}
