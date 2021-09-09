import {comments,CommentType} from '../data/comments';

const Resplies = ({username, userImagePath, commentText, likeNum, replies} :CommentType) => {

    const show = () => {
        return (
            <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-500'>{likeNum} คน</p>
            </div>
        )
    }

    return (
        <div className="flex p-2 items-start space-x-2 pl-14 text-white">
            <img className="w-10 w-10 rounded-full" src={userImagePath}></img>
            <div className="bg-gray-200 rounded-lg p-2">
              <p className="font-semibold text-white">{username}</p>
              <p>{commentText}</p>
            {likeNum > 0 ? show() : null}
            </div>
        </div>
    )
}

export default Resplies
