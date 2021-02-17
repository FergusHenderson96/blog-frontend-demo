import React from 'react'
import styled from 'styled-components';
import moment from "moment";

const Post = ({post, user}) => {
    return (
        <Container>
          <h1>{post.title}</h1>  
          <p>{post.content}</p>
          <p>Written by {user.name}</p>
          <p>{moment.utc(post.createdAt).fromNow()}</p>
          
        </Container>
    ) 
}

const Container = styled.div `
width: 250vw;
height: 200px;
border: 1px solid red;
margin: 3px;
`

export default Post;