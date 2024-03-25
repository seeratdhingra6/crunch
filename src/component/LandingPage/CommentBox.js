import React from 'react'
import './style/commentBox.css'
import CommentImg from "./asset/commentImg.png"

const CommentBox = () => {
    return (
        <div className="comment__container">
            <div className="comment__imgBox">
            <img src={CommentImg} alt="" />
            </div>
            <p className="comment__name">John Doe</p>
            <p className="comment__type">Hip Hop singer</p>
            <p className="comment__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem repudiandae quia atque amet illum corporis, laborum saepe Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, totam.</p>
            <p className="comment__link " href="">[link to profile]</p>
        </div>
    )
}

export default CommentBox
