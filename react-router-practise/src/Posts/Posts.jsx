import { useLoaderData } from 'react-router-dom';
import Post from '../components/Post/Post';

const Posts = () => {

    const posts= useLoaderData();
    
    return (
        <div>
            <h2>This are the posts</h2>

            <div>
            {
              posts.map(p=><Post key={p.id} 
                p={p}></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;