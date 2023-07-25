"use client";

import { addCommentStore, replyCommentStore } from "@/redux";
import React, { useState } from "react";
import { HiOutlineHeart, HiOutlineReply } from "react-icons/hi";

const Comments = ({ comments, articleId }) => {
  const [commentContent, setCommentContet] = useState("");

  const handleComment = () => {
    addCommentStore({
      articleId: articleId,
      comment: {
        id: Date.now(),
        author: "kullanıcı",
        content: commentContent,
        date: new Intl.DateTimeFormat("tr").format(new Date()),
        likes: [],
        comments: [],
      },
    });

    setCommentContet("");
  };

  return (
    <div className="comment-container">
      <h2 className="border-bottom-2 mb-1 pb-1 text-center">Yorumlar</h2>
      <CommentArea
        commentContent={commentContent}
        setCommentContet={setCommentContet}
        handleComment={handleComment}
      />
      {comments?.length > 0 &&
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} articleId={articleId} />
        ))}
    </div>
  );
};

const Comment = ({ comment, articleId }) => {
  const [commentContent, setCommentContet] = useState("");
  const [replyShow, setReplyShow] = useState(false);

  const handleComment = (commentId) => {
    replyCommentStore({
      commentId: commentId,
      articleId: articleId,
      reply: {
        id: Date.now(),
        author: "kullanıcı",
        content: commentContent,
        date: new Intl.DateTimeFormat("tr").format(new Date()),
        likes: [],
        comments: [],
      },
    });

    setReplyShow(false);
    setCommentContet("");
  };

  return (
    <div className="comment">
      <h4 className="author">{comment.author}</h4>
      <p className="content">{comment.content}</p>
      <p className="date">{comment.date}</p>
      <button className="button">
        <HiOutlineHeart style={{ marginRight: "8px", alignItems: "center" }} />
        {comment.likes.length}
      </button>
      {replyShow ? (
        <CommentArea
          commentContent={commentContent}
          setCommentContet={setCommentContet}
          handleComment={handleComment}
          commentId={comment.id}
        />
      ) : (
        <button className="button" onClick={() => setReplyShow(true)}>
          <HiOutlineReply
            style={{ marginRight: "8px", alignItems: "center" }}
          />
          yanıtla
        </button>
      )}
      {comment?.comments.length > 0 &&
        comment.comments.map((c) => (
          <Comment key={c.id} comment={c} articleId={articleId} />
        ))}
    </div>
  );
};

const CommentArea = ({
  commentContent,
  setCommentContet,
  handleComment,
  commentId,
}) => {
  return (
    <div className="comment">
      <textarea
        value={commentContent}
        placeholder=" Yorum yaz"
        onChange={(e) => setCommentContet(e.target.value)}
        style={{ width: "100%" }}
      />
      <button className="button" onClick={() => handleComment(commentId)}>
        Yorum Yap
      </button>
    </div>
  );
};

export default Comments;
