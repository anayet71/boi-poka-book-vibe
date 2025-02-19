import bannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className='min-w-1/12'
            src={bannerImg} />
          <div>
            <h1 className="text-5xl font-bold leading-relaxed ">Books to freshen up <br />your bookshelf</h1>
           
            <button className="btn btn-info mt-7">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;