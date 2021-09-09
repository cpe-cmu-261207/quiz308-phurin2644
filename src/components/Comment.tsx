import Reply from './Replies'

export type CommentType = {
    username: string;
    userImagePath: string;
    commentText: string;
    likeNum: number;
    replies: CommentType[]
}

const Comments = ({username, userImagePath, commentText, likeNum, replies} :CommentType) => {
    const show = () => {
        return (
            <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-500'>{likeNum} คน</p>
            </div>
        )
    }

    return (
        <div>
            <div className="flex p-2 items-start space-x-2 text-white">
                <img className="w-10 w-10 rounded-full" src={userImagePath}></img>
                <div className="bg-gray-200 rounded-lg p-2">
                <p className="font-semibold text-white">{username}</p>
                <p>{commentText}</p>
                {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
                {likeNum >= 0 ? show() : null} 
                </div>
            </div>
            {replies.map(elt => {return (
                    <Reply username={elt.username} userImagePath={elt.userImagePath}  commentText={elt.commentText} 
                    likeNum={elt.likeNum} replies={elt.replies}/>)
            })}
        </div>
    )
}

export default Comments
