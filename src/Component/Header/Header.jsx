import profile from '../../../src/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between px-80 py-8 mt-12 border-b'>
            <h3 className="text-4xl font-bold text-[#111111]">Knowledge Cafe</h3>
            <div>
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;