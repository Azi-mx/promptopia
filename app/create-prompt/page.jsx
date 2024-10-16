"use client";
import React, { useState } from "react";
import Form from "@components/Form";
import { PostPrompt } from "@components/PostPrompt";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [post, setPost] = useState({ prompt: "", tag: "" });
  const [submitting, setIsSubmitting] = useState(false);
  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await PostPrompt(setIsSubmitting, post, session);
    } catch (error) {
      console.log(error);
    }
    router.push("/");
  };
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
