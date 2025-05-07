import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import { firebaseUrl } from "../firebase";
import SubNav from "../components/SubNav";
import styles from "./styles.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const [user, loading, error] = useAuthState(auth); // Henter aktuelle brugers oplysninger
 
    useEffect(() => {
        async function getPosts() {
            const url = `${firebaseUrl}/posts.json`;
            const response = await fetch(url);
            const data = await response.json();
            const postsArray = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
            
            // Filtrer posts baseret på den aktuelle brugers email
            const personligePosts = postsArray.filter(post => post.email === user.email);
            setPosts(personligePosts);
        }
        getPosts();
    }, [user]);

    if (loading) {return <div>Indlæser...</div>;}
    if (error) {return <div>Fejl: {error.message}</div>;}

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
