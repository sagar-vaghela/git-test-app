
import React, { Component } from "react";
import { connect } from "react-redux";
import '../App.css';
import { getPosts } from "../actions";
import Item from "../component/item";

class RootContainer extends Component{

    componentDidMount () {
        console.log('called')
        // this.props.getPosts();
        const { getPosts } = this.props;
        getPosts();
    }

  render(){
    const {error, isLoading, posts } = this.props;
    return(
        <div>
        {error && <div>{error}</div>}
        {
            !isLoading?
            <table>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {posts && posts.length !== 0 && posts.map((post, index) => <Item data={post} key={index}/> )}
                </tbody>
            </table>
          :
          <div className="loader"></div>
        }
        </div>
    );
  }
}

const mapStateToProps = state => ({
    posts: state.postData.posts,
    isLoading: state.postData.isLoading,
    error: state.postData.error,
  });
  
  const mapDispatchToProps = {
    getPosts
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RootContainer);