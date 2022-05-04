import "./contact.css";
const Contact = () => {
  return (
    <div className="contact bg-light justify-content-center">
        <h1 className="text-center">Contact Us</h1>
      <div className="container">
        <form className="size" action="">
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" id="fname" placeholder="First Name" />

          <label htmlFor="fname">Last Name</label>
          <input type="text" name="lname" id="lname" placeholder="Last Name" />

          <label htmlFor="fname">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            <option value="gh">Ghana</option>
          </select>

          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: "200px" }}
          ></textarea>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
