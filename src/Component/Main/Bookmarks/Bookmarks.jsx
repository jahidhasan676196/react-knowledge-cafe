import Bookmark from "./Bookmark/Bookmarks";
import propTypes from 'prop-types';


const Bookmarks = ({allblogs,time}) => {
    return (
        <div className="w-1/3 h-1/2 border bg-[#1111110D] p-6 rounded-lg">
            <div className="">
                <h3 className="text-2xl text-[#6047EC] font-bold  rounded-lg">Spent time on read : {time} min</h3>
            </div>
            <div className="space-y-5 mt-6">
                <h3 className="text-2xl text-[#111111] font-bold">Bookmarked Blogs : {allblogs.length}</h3>
                {
                    allblogs.map(singleblog=><Bookmark 
                        key
                        singleblog={singleblog}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes={
    allblogs:propTypes.array,
    time:propTypes.number
}
export default Bookmarks;