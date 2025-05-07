import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import { firebaseUrl } from "../firebase";
import SubNav from "../components/SubNav";
import styles from "./styles.module.css";

export default function UpdatePage() {
    const [post, setPost] = useState();
    const params = useParams();
    const navigate = useNavigate();
    const url = `${firebaseUrl}/posts/${params.postId}.json`;

    useEffect(() => {
        async function getPost() {
            const response = await fetch(url);
            const data = await response.json();
            setPost(data);
        }

        getPost();
    }, [url]);

    async function updatePost(postToUpdate) {
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(postToUpdate)
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Post updated: ", data);
            navigate("/admin");
        } else {
            console.log("Sorry, something went wrong");
        }
    }

    async function deletePost() {
        const confirmDelete = window.confirm(`Do you want to delete post, ${post.title}?`);
        if (confirmDelete) {
            const response = await fetch(url, {
                method: "DELETE"
            });
            if (response.ok) {
                console.log("Post deleted");
                navigate("/admin");
            } else {
                console.log("Sorry, something went wrong");
            }
        }
    }

    return (
        <>
        <SubNav />
        <section className={styles.page}>
            <h1>Update Post</h1>
            <PostForm post={post} savePost={updatePost} />
            <button className={styles.btndelete} onClick={deletePost}>
                Delete Post
            </button>
        </section>
        </>
    );
}
