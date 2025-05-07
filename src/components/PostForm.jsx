import { useEffect, useState } from "react";
import imgPlaceholder from "../assets/img/img-placeholder.jpg";
import styles from "../views/styles.module.css";

export default function PostForm({ savePost, post }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [imageFile, setImageFile] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const email = sessionStorage.getItem("email");

    useEffect(() => {
        if (post) {
            // if post, set the states with values from the post object.
            // The post object is a prop, passed from UpdatePage
            setTitle(post.title);
            setBody(post.body);
            setImageFile(post.image);
        }
    }, [post]); // useEffect is called every time post changes.

    function handleSubmit(event) {
        event.preventDefault();
        const formData = {
            // create a new object to store the value from states / input fields
            title: title,
            image: imageFile,
            body: body,
            email: email // Jeg gemmer email med de øvrige information. Så kan jeg filtrere på den.
        };

        const validForm = formData.title && formData.body && formData.image; // will return false if one of the properties doesn't have a value
        if (validForm) {
            // if all fields/ properties are filled, then call savePost
            savePost(formData);
        } else {
            // if not, set errorMessage state.
            setErrorMessage("Please, fill in all fields.");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title
                <input type="text" value={title} placeholder="Type a title" onChange={e => setTitle(e.target.value)} />
            </label>
            <label>
                Body
                <input type="text" value={body} placeholder="Type a body text" onChange={e => setBody(e.target.value)} />
            </label>
            <label>
                Image URL
                <input type="text" value={imageFile} placeholder="Copy in an image URL" onChange={e => setImageFile(e.target.value)} />
                <img className={styles.imagepreview} src={imageFile || imgPlaceholder} alt="Choose" onError={(event) => {if (!event.target.src || event.target.src === window.location.href) {event.target.src = imgPlaceholder;}}}  />
            </label>
            <p className={styles.texterror}>{errorMessage}</p>
            <button type="submit">Save</button>
        </form>
    );
}
