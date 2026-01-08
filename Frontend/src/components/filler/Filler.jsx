
import './filler.scss'; // <-- Import your SCSS file

const Filler = () => {
    return (
        <div className="filler-container">

            <div className="video-wrapper">

                <h1 className="video-heading">
                    What I Do ?
                </h1>

                <video
                    className="video-element"
                    src="https://res.cloudinary.com/dwnoyi7gc/video/upload/v1767890794/filler_tuiyu7.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                </video>

            </div>
        </div>
    );
};

export default Filler;