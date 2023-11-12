export function PostsNew(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onCreatePost(params, () => event.target.reset());
    };

    return (
        <div>
            <h1>New Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    Title: <input name="title" type="text" />
                </div>
                <div>
                    Description <input name="body" type="text" />
                </div>
                <div>
                    Image: <input name="image" type="text" />
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}