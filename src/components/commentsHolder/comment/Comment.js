import css from './comment.module.css'
const Comment = (props) =>{
    let {comments:comment} = props;

    return(<div className={css.comment}>
        <div><b>ID:</b>{comment.id}</div>
        <div><b>postId:</b>{comment.postId}</div>
        <div><b>Name:</b>{comment.name}</div>
        <div><b>Email:</b>{comment.email}</div>
        <div><b>Body:</b>{comment.body}</div>
    </div>)
}
export {Comment};