
import { useState } from "react";
import Blogs from "./Blogs/Blogs";
import Bookmarks from "./Bookmarks/Bookmarks";

const Main = () => {
    const [allblogs,setAllblogs]=useState([])
    const handleClick=(blog)=>{
        const totalblogs=[...allblogs,blog]
        setAllblogs(totalblogs)
    }
    const [time,setTime]=useState(0)
    const handleMarkRead=(reading_time)=>{
        setTime(time+reading_time)
    }
    return (
        <div className="flex px-80 py-8 gap-8">
            <Blogs handleClick={handleClick} 
            handleMarkRead={handleMarkRead}></Blogs>
            <Bookmarks allblogs={allblogs}
            time={time}></Bookmarks>
        </div>
    );
};

export default Main;