import video from "../assets/2169880-hd_1280_720_30fps.mp4";
function Main() {
  return (
    <div className="main" id="home">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted loading="lazy"></video>
    <div className="content">
      <h1>Welcome To Travler</h1>
      <p>The Best Booking Travels Website</p>
    </div>
  </div>
  )
};
export default Main;