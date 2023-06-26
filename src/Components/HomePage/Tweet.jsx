import React from 'react'
import Avatar from './Avatar';
import NameWithHandle from './NameWithHandle';
import Message from './Message';

export default function Tweet() {
  const Time = () => <span className="time">3h ago</span>;
  const CommentButton = () => <i className="far fa-comment" />;
const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;
const LikeButton = () => <i className="fa fa-heart like-button" />;
const ShareButton = () => <i className="fas fa-external-link-alt" />;


  return (
    <div className="tweet">
    <Avatar />
    <div className="content">
      <NameWithHandle />
      <Time />
      <Message />
      <div className="button">
        <LikeButton />
        <CommentButton />
      </div>
    </div>
  </div>
  )
}
