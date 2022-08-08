import React from "react";

function AlertError(props) {
  return (
    <section className="section__alert">
      <p className="notification">Gửi thất bại!</p>
      <i className="icon">
        <img src="../../../img/icon-error.png" alt="len" />
      </i>
    </section>
  );
}

export default AlertError;
