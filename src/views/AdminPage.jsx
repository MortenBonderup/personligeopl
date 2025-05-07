import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import { firebaseUrl } from "../firebase";
import SubNav from "../components/SubNav";
import styles from "./styles.module.css";

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const email = sessionStorage.getItem("email");

    useEffect(() => {
        async function getPosts() {
            const url = `${firebaseUrl}/posts.json`;
            const response = await fetch(url);
            const data = await response.json();
            const postsArray = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
            
            // Filtrer posts baseret på den aktuelle brugers email
            const personligePosts = postsArray.filter(post => post.email === email);
            setPosts(personligePosts);
        }
        getPosts();
    }, [email]);

    return (
        <>
        <SubNav />
        <section className={styles.page}>
            {posts.length > 0 ? (
                <section className={styles.gridcontainer}>
                    {posts.map(post => (
                        <PostCard post={post} key={post.id} />
                    ))}
                </section>
            )
                :
                (<p>Nothing to show</p>)
            }
        </section>
        </>
    );
}
