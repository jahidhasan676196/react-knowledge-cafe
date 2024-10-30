
import propTypes from 'prop-types'
import frame from '../../../../../src/images/Frame (7).svg'

const Blog = ({blog,handleClick,handleMarkRead}) => {
    const {cover,author_img,author,posted_date,reading_time,title}=blog
    return (
        <div>
            <div>
                <img className='w-full' src={cover} alt="" />
            </div>
            <div className='flex justify-between'>
                <div className="flex gap-6">
                    <img className="w-16" src={author_img} alt="" />
                    <div>
                        <h3 className='text-[#111111] text-2xl font-bold'>{author}</h3>
                        <p className='text-[#11111199] text-base font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <p className='text-[#11111199] text-xl font-semibold'>{reading_time} min read</p>
                    <button onClick={()=>handleClick(blog)}><img src={frame} alt="" /></button>
                </div>
            </div>
            <div>
                <h3 className='text-4xl text-[#111111] font-bold'>{title}</h3>
            </div>
            <div>
                <button onClick={()=>handleMarkRead(reading_time)} className='text-[#6047EC] text-xl font-semibold underline'>Mark as read</button>
            </div>
        </div>
    );
};
Blog.propTypes={
    blog:propTypes.object,
    handleClick:propTypes.func,
    handleMarkRead:propTypes.func

}
export default Blog;