/** @jsx createVNode */
import { createVNode } from "../../lib";
import PostService from "./PostService";

export const PostForm = () => {
  const { submitAddPost } = PostService();

  return (
    <div className="mb-4 bg-white rounded-lg shadow p-4">
      <textarea
        id="post-content"
        placeholder="무슨 생각을 하고 계신가요?"
        className="w-full p-2 border rounded"
      />
      <button
        id="post-submit"
        onClick={() => {
          const textEl = document.getElementById("post-content");
          submitAddPost(textEl.value);
          textEl.value = "";
        }}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
      >
        게시
      </button>
    </div>
  );
};
