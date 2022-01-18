import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";

const Basic = () => (
  <div>
    <h1>Login</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: ""
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <div>
          {" "}
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="field required" />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="field required" />
        </div>

        <div>
          {" "}
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="field required"
            type="email"
          />
        </div>
        <div>
          {" "}
          <label htmlFor="current">current employee</label>
          <Field id="current" name="current" type="checkbox" />
        </div>
        <div>
          <select id="tier">
            <option> Select Tier </option>
            <option> Tier 1 </option>
            <option> Tier 2 </option>
            <option> Tier 3 </option>
            <option> N/A </option>
          </select>{" "}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

ReactDOM.render(<Basic />, document.getElementById("root"));
