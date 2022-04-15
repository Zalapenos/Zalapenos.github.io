import React from "react";
import '../styles/forum.css';
import "../styles/forum.css";


const Testerforum = () => {
    return (
    <div className="forum-cont">
    <section className='heading-forum'>
      <h1>
         Welcome to the Forum
      </h1>
        <div class="forum-nav">
            <nav class="navigation hide" id="navigation">
                {/* <span class="close-icon" id="close-icon" onclick="showIconBar()"><i class="fa fa-close"></i></span> */}
                <ul class="nav-list">
                    <li class="navfor-item"><a href="forums.html">Forums</a></li>
                    <li class="navfor-item"><a href="posts.html">Posts</a></li>
                    <li class="navfor-item"><a href="detail.html">Detail</a></li>
                </ul>
            </nav>
        </div>
        <div class="search-box">
            <div>
                <select name="" id="">
                    <option value="Everything">Everything</option>
                    <option value="Titles">Titles</option>
                    <option value="Descriptions">Descriptions</option>
                </select>
                <input type="text" name="q" placeholder="search ..."/>
                <button><i class="fa fa-search"></i></button>
            </div>
        </div>


    <footer className="foot-forum">
        <span>&copy;  drew hissh </span>
    </footer>
    </section>
    </div>
    
    )
}


export default Testerforum;