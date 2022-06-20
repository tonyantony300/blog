import React from "react";
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import PostUser from './PostUser';

class PostList extends React.Component {

    componentDidMount(){
       this.props.fetchPostsAndUsers();
    }

 renderdList(){

    return this.props.posts.map(post=>{
        return(
         <div className="item" key={post.id}>
             <i className="large middle aligned icon user"> </i>
                 <div className="content">
                     <div className="description">
                         <h2>{post.title}</h2>
                         <p>{post.body}</p>
                     </div>
                     <div>
                         <PostUser userId={ post.userId }/>
                     </div>
                 </div>
         </div>
        )
     })
 }


render(){
    return  <div className="ui relaxed divided list"> {this.renderdList()} </div>
 }

}

const mapStateToProps=(state)=>{
 return {posts: state.posts }
}

export default connect( mapStateToProps,{ fetchPostsAndUsers })(PostList);