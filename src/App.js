import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Form from "./components/Form";
import {fetchPosts, fetchUsers} from './utils/index';

const App = () => {

const [posts, setPosts] = useState([]);
//empty array as data will return as an array
const [users, setUsers] = useState([]);
const [user, setUser] = useState ("");
const [title, setTitle] = useState ("");
const [content, setContent] = useState ("");

useEffect(() => {
fetchUsers(setUsers);
},[])
//passing empty array will mean function only runs once


// useEffect(() => {
//   const getPostsByUser = async () => {
//     const response = await fetch(`http://localhost:5000/posts/${users[2]._id}`)
//     const data = await response.json ()
// setBensPosts(data);
// setUserId(users[2]._id);
//   }
//   getPostsByUser();
// }, [])

const getUsersPosts = async (index) => {
 const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${users[index]._id}`)
 //this function fetches the users id
 const data = await response.json();
 console.log(data);
 setPosts(data);
 setUser(users[index]);
}

const addPost = async (event) => {
event.preventDefault();

  const response = await fetch (`${process.env.REACT_APP_API_URL}/posts/${user.id}`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    //equivellant of selecting json dropdown in insomnia
    body: JSON.stringify({
      title: title,
      content: content,
      author: user._id
    })
  })

  const data = await response.json()

let temp = [...posts]
//takes posts array and creates a new array
temp.push (data);
setPosts(temp);

}

  return (
    <Container>
      <Navbar users={users} getUsersPosts={getUsersPosts}/>
    <h1>{!user && "Choose a user"}</h1>
    <PostContainer>
    {posts.map((post, index) => {
      //takes post and index objects and maps through 
      return <Post post={post}/>;
      //this runs and finds how many posts are on database and renders that amount of posts or array length
    })}
    </PostContainer>
    {user && <Form setTitle={setTitle} setContent={setContent} addPost={setPosts}/>}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  backkground-color: lightsalmon;
  display: flex;

  flex-direction: column;
  align-items: center;
`;
const PostContainer = styled.div `
width: 100vw;
display: flex;
flex-wrap: wrap;

`;
export default App;
