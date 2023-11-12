export function PostsShow(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onUpdatePost(props.post.id, params, () => event.target.reset());
    };
    return (
        <div>
            <h1>Blog post information</h1>
            <p>Title: {props.post.title}</p>
            <p>Image: {props.post.image}</p>
            <p>Description: {props.post.body}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    Title: <input defaultValue={props.post.title} name="title" type="text" />
                </div>
                <div>
                    Image: <input defaultValue={props.post.image} name="image" type="text" />
                </div>
                <div>
                    Desription: <input defaultValue={props.post.body} name="body" type="text" />
                </div>
                <button type="submit">Update Post</button>
            </form>
        </div>
    );
}