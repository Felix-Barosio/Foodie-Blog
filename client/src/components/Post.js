import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const api = "/recipes";

// default states
const initialState = {
    meal_name: "",
    image_url: "",
    instructions: "",
    origin: "",
    tags: "",
    category: "",
    video: "",
    ingredients: "",
};

const Post = ({ posts, loadPosts }) => {
    const [show, setShow] = useState(false);
    const [state, setState] = useState(initialState);
    const [userId, setUserId] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);

    // object destructuring
    const { meal_name,
        image_url,
        origin,
        tags,
        category,
        ingredients,
        video,
        instructions
    } = state;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // enable us to input data on the input fields
    function handleChange(e) {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    // handle the form submission
    function handleSubmit(e) {
        e.preventDefault();
        if (!meal_name || !image_url || !origin || !category || !ingredients || !video || !instructions) {
            toast.error("Ensure to fill all fields!");
        } else {
            if (!editMode) {
                axios.post(api, state);
                toast.success("Recipe Added Succesfully!");
                // restore the form input to default with no data
                setState({
                    meal_name: "",
                    image_url: "",
                    origin: "",
                    tags: "",
                    category: "",
                    ingredients: "",
                    video: "",
                    instructions: ""
                });
                // close modal after sucessfull submission
                handleClose();
                // rerender the loadPosts function
                loadPosts();
            } else {
                axios.patch(`${api}/${userId}`, state);
                toast.success("Update Succesfully Done!");
                // restore the form input to default with no data
                setState({
                    meal_name: "",
                    image_url: "",
                    origin: "",
                    tags: "",
                    category: "",
                    ingredients: "",
                    video: "",
                    instructions: ""
                });
                // close modal after sucessfull submission
                handleClose();
                // rerender the loadPosts function
                loadPosts();
                setUserId(null);
                setEditMode(false);

            }
        }
    }
    return (
        <div>
        </div>
    );
};

export default Post;
