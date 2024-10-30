import propTypes from 'prop-types'

const Bookmark = ({singleblog}) => {
    const {title}=singleblog;
    return (
        <div className="bg-[#FFFFFF] p-5 rounded-lg">
            <h3 className="text-lg text-[#111111] font-semibold">{title} </h3>
        </div>
    );
};
Bookmark.propTypes={
    singleblog:propTypes.object
}
export default Bookmark;