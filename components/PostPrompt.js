import axios from "axios";

export const PostPrompt = async (setIsSubmitting, post, session) => {
  let data;
  try {
    const response = await axios.post("/api/prompt/new", {
      prompt: post.prompt,
      userId: session?.user.id,
      tag: post.tag,
    });
  } catch (error) {
    console.log(error);
  } finally {
    setIsSubmitting(false);
  }
};
