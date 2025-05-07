import { useState, useEffect } from "react";
import { firebaseUrl } from "../firebase";
import styles from "./styles.module.css";

export default function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const url = `${firebaseUrl}/posts.json`;
            const response = await fetch(url);
            const data = await response.json();
            const postsArray = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
            setPosts(postsArray);
        }
        getPosts();
    }, []);

    return (
         <section className={styles.page}>
                    {posts.length > 0 ? (
                        <section className={styles.gridcontainer}>
                            {posts.map(post => (
                                <article style={{cursor: "default"}}>
                                <img src={post.image} alt={post.title} />
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                                </article>
                            ))}
                        </section>
                    )
                        :
                        (<p>Nothing to show</p>)
                    }
        </section>

    );
}

