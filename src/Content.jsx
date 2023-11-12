import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { PostsShow } from "./PostsShow";
import { Modal } from "./Modal";

export function Content() {
    const [posts, setPosts] = useState([]);
    const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
    const [currentPost, setCurrentPost] = useState({});

    const handleIndexPosts = () => {
        console.log("handleIndexPosts");
        axios.get("http://localhost:3000/posts.json").then((response) => {
            console.log(response.data);
            setPosts(response.data);
        });
    };

    const handleCreatePost = (params, successCallback) => {
        console.log("handleCreatePosts", params);
        axios.post("http://localhost:3000/posts.json", params).then((response) => {
            setPosts([...posts, response.data]);
            successCallback();
        });
    };

    const handleShowPost = (post) => {
        console.log("handleShowPost", post);
        setIsPostsShowVisible(true);
        setCurrentPost(post);
    };

    const handleUpdatePost = (id, params, successCallback) => {
        console.log("handleUpdatePost", params);
        axios.patch(`http://localhost:3000/posts/${id}.json`,params).then((response) => {
            setPosts(
                posts.map((post) => {
                    if (post.id === response.data.id) {
                        return response.data;
                    } else {
                        return post;
                    }
                })
            );
            successCallback();
            handleClose();
        });
    };

    const handleClose = () => {
        console.log("handleClose");
        setIsPostsShowVisible(false);
    };

    useEffect(handleIndexPosts, []);

    return (
        <div>
            <PostsNew onCreatePost={handleCreatePost} />
            <PostsIndex posts={posts} onShowPost={handleShowPost}/>
            <Modal show={isPostsShowVisible} onClose={handleClose}>
                <h1>Test</h1>
                <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} />
            </Modal>
        </div>
    );
}