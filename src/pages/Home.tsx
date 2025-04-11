import { useGetPostsQuery } from "@/features/posts/postsSlice";

export default function Home() {
  // This hook automatically fetches data when the component mounts
  const { data: posts, isLoading, isError, error } = useGetPostsQuery();

  // Handle loading state
  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  // Handle error state
  if (isError) {
    return <div>Error loading posts: {JSON.stringify(error)}</div>;
  }

  // Display the data
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Recent Posts</h2>

      {posts && posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}
