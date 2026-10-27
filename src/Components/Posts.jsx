import {useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Posts() {
    const[posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
    },[]);
    return (
        <div style={{padding: 20}}>
            <h1 style={{textAlign: 'center'}}>Posts</h1>
        <ul style={{listStyle:'none', padding: 0}}>
            {posts.map(post => (
                <li key={post.id} style={{marginBottom: 10}}>
                    <Card variant="outlined" style={{border: '1px solid #ccc'}}>
                        <CardContent>
                            <Typography variant="h6" style={{color: 'black', fontWeight: 'bold'}}>{post.id}. {post.title}</Typography>
                            <Typography style={{color: 'black', marginTop: 8}}>{post.body}</Typography>
                        </CardContent>
                    </Card>
                    </li>
            ))}
            </ul>
            </div>
    );
    
}
export default Posts;