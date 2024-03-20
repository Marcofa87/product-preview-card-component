import React from "react";

export default function Info() {
  return (
    <>
      <div className="presentation">
        <img src="/images/20150311_193126.jpg" alt="" />
        <h1>Marco Falasca</h1>
        <h4>Frontend Developer</h4>
        <a href="https://github.com/Marcofa87" target="_blank">
          View my Github
        </a>
      </div>
      <div className="buttons">
        <div className="button-1">
          <img src="/src/assets/gmail.png" alt="mail-logo" />
          <a href="mailto:marco.falasca87@gmail.com">Send Email</a>
        </div>
        <div className="button-2">
          <img src="/src/assets/linkedin.png" alt="linkedin-logo" />
          <a
            href="https://www.linkedin.com/in/marco-falasca-web-developer/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
