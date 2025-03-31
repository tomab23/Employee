const ContactForm = () => {
  return (
    <div>
      <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">Contact</legend>

        <label className="fieldset-label">Name</label>
        <input type="text" className="input" placeholder="My name" />

        <label className="fieldset-label">Email</label>
        <input type="text" className="input" placeholder="My email" />

        <label className="fieldset-label">Message</label>
        <textarea className="textarea" placeholder="My message"></textarea>

        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
    </div>
  );
};

export default ContactForm;
