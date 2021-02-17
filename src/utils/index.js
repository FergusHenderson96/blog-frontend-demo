export const fetchPosts = async (setPosts) => {
    //fetches the data (posts) and sets the posts 
    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
      //second argument in fetch
      method: "GET",
    });
    const data = await response.json();
    setPosts(data);
    }

    export const fetchUsers = async (setUsers) => {
        //fetches the data (posts) and sets the posts 
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
          //second argument in fetch
          method: "GET",
        });
        const data = await response.json();
        setUsers(data);
        }