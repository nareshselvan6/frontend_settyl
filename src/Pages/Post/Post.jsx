import React, { useEffect, useState } from 'react';
import NavBar from '../../Components/NavBar';
import "../Post/Post.css";
import { useDispatch, useSelector } from 'react-redux';
import { createpost, getpost } from '../../Redux/Postredux/PostActions';


const Post = () => {
    const[editmodel,setEditmodel]=useState(false) 

    // render
    const[render,setRender]=useState(false)

    const[title,setTitle]=useState()
    const[content,setContent]=useState()

    const dispatch=useDispatch()

    const{postdata,loading}=useSelector((state)=>state.poststate)
    console.log(postdata);
 

    const modal=()=>{
      
      const value={title,content}
      
      dispatch(createpost(value))
      alert("scroll down to check your feeds")
      setEditmodel(false)
      setTitle('')
      setContent('')
      setRender(true)
    }

    useEffect(()=>{

    setRender(false)
    dispatch(getpost());

    },[render])



    return (
        <div>
                <NavBar/>
                <div className='upload_post'>
                    <div className='post_upload'>
                      <div className='post_status'>
                        <h2>"Post Your Own Stories , <br/> Let Them Know About You"</h2>
                        
                        <div className='post_button'>
                        <button className=' btn btn-primary create_post' onClick={()=>setEditmodel(true)}>Create Post</button>
                        </div>

                      </div>
                    </div>
                    <div className='post_feed'>
                        <div className='post_scroll '>
                            <h1 className='posts'>PoStS</h1>
                            {postdata?.postget?.map((ele,ind)=>{
                              return(
                                <div className='cards_content' key={ele._id}>
                               <div className="card" style={{width: '18rem'}}>
                               <div className="card-body">
                               <h5 className="card-title">Title : {ele.title}</h5>
                               <p className="card-text">{ele.postContent}</p>
                               </div>
                               </div>
                                </div>
                              )
                            })}
                        </div>
                    </div>
                </div>
                {editmodel && (
  <div
    className="modal fade show"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
  >
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header ">
          <h1 className="modal-title fs-5 " id="exampleModalLabel">
            Post Your Mood !!!
          </h1>
          <button
            type="button"
            className="btn-close btn btn-danger"
            onClick={() => setEditmodel(false)}
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <h3 htmlFor="recipient-name" className="col-form-label d-flex justify-content-center align-items-center">
                 Title : &nbsp;
              <input type="text" placeholder=' Title' className='black' value={title} onChange={(e)=>setTitle(e.target.value)}/>
              </h3>
            </div>
      
            <div className="mb-3">
              <h3 htmlFor="message-text" className="col-form-label d-flex justify-content-center align-items-center">
                Content : &nbsp; 
                <textarea placeholder=" Enter your Content" className='textarea_comments' value={content} onChange={(e)=>setContent(e.target.value)}></textarea>

              </h3>
            </div>
          
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => setEditmodel(false)}
          >
            Close
          </button>
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => modal()}
          >
           Post !
          </button>
        </div>
      </div>
    </div>
  </div>
)}
        </div>
    );
};

export default Post;