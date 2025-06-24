const ContactForm = ({ formik }) => {
  return (
    <div>
      <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">Contact</legend>

        <label className="fieldset-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="input"
          placeholder="My name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label className="fieldset-label">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          className="input"
          placeholder="My email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label className="fieldset-label">Message</label>
        <textarea
          id="message"
          name="message"
          className="textarea"
          placeholder="My message"
          onChange={formik.handleChange}
          value={formik.values.message}
        ></textarea>

        <button type="submit" className="btn btn-neutral mt-4">Envoyer</button>
      </fieldset>
    </div>
  );
};

export default ContactForm;
