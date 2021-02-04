import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import Navbar from "./components/Navbar";
import Post from "./components/Post";

const App = () => {

const [posts, setposts] = useState([])
//empty array as data will return as an array

useEffect(() => {
const fetchData = async () => {
const response = await fetch('http://localhost:5000/posts', {
  //second argument in fetch
  method: "GET",
});
const data = await response.json();
setposts(data);
console.log(data);

}
fetchData()
},[])
//passing empty array will mean function only runs once



  return (
    <Container>
      <Navbar/>
    <h1>My Blog</h1>
    <PostContainer>
    {posts.map((post, index) => {
      //takes post and index objects and maps through 
      return <Post post={post}/>;
      //this runs and finds how many posts are on database and renders that amount of posts
    })}
    </PostContainer>
    
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
