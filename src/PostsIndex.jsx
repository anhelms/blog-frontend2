export function PostsIndex(props) {
    return (
        <div>
            <h1>All posts</h1>
            {props.posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <img src={post.image} />
                    <p>Description: {post.body}</p>
                    <button onClick={() => props.onShowPost(post)}>More Info</button>
                </div>
            ))}
        </div>
    );
}