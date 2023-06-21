import { HiOutlineLocationMarker } from "react-icons/hi";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
// REACT LEAFLET
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Contact = () => {
  const center = [9.5934637, 8.1055707];

  return (
    <div id="contact">
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

      <MapContainer
        center={center}
        zoom={6}
        style={{ width: "100%", height: "500px" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=trFRj7aVqpKX9jWwUFeO"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
      </MapContainer>
    </div>
  );
};

export default Contact;
