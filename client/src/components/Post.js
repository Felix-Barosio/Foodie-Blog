import React, { useState } from "react";

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

    return (
        <div>
        </div>
    );
};

export default Post;
