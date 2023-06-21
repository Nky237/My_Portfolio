import { HiOutlineLocationMarker } from "react-icons/hi";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div id="contact">
      {/* <h1 className="title" style={{ textAlign: "center" }}>Contact Me</h1> */}
      <div className="contact">
        <div className="contact1">
          <h3>What’s your story? Get in touch</h3>
          <p>
            Always available for freelancing if the right project comes along,
            Feel free to contact me.
          </p>
          <div className="conIcon">
            <div>
              <HiOutlineLocationMarker />
              <p>Gbagada, Lagos State</p>
            </div>
            <div>
              <SiGmail />
              <p>ezikenkemdilijane@gmail.com</p>
            </div>
            <div>
              <BsFillTelephoneOutboundFill />
              <p>+2349157364210</p>
            </div>
          </div>
        </div>
        <div className="contact2">
          <h2>Say Something</h2>
          <form action="">
            <div className="Con">
              <input type="text" placeholder="full name" />
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" placeholder="Subject" />
            </div>
            <div>
              <textarea name="" id="" placeholder="Type comment"></textarea>
            </div>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
