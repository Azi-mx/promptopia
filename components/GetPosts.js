import axios from "axios";

const GetPosts = async (setAllPosts) => {
  try {
    const response = await axios.get("/api/prompt/");
    setAllPosts(response.data);
  } catch (error) {
    console.log(error);
  }
};
export default GetPosts;
