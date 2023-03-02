import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";


const App = () => {
  
  const [values, setValues] = useState({
    name: "",
    email: "",
    tel: "",
    password: "",
    address: "",
    gender: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "Name is a required field",
      label: "Name",
      
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Email is a required field",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password is a required field",
      label: "Password",
  
      required: true,
    },
    {
      id: 4,
      name: "tel",
      type: "tel",
      placeholder: "Tel",
      label: "Tel",
      errorMessage: "Tel is a required field",
      required: true,
    },

    {
      id: 5,
      name: "address",
      type: "text",
      placeholder: "Address",
      errorMessage: "Address is a required field",
      label: "Address",
      required: true,
    }

  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    const name = e.target.name;
    const valueGen = e.target.value;
    const err = {};
    console.log('====================================');
    console.log(name);
    console.log('====================================');

    if (name == "gender") {
      setValues(false);
    }

    if (name == "gender" && valueGen == "") {
      const val = "";
      setValues({ ...values, [e.target.name]: val });
      err.gender = "Gender is a required field.";
    }
    if (name == "gender" && valueGen == "1") {
      const val1 = "male";
      setValues({ ...values, [e.target.name]: val1 });
    }
    if (name == "gender" && valueGen == "2") {
      const val2 = "famale";
      setValues({ ...values, [e.target.name]: val2 });
    }
  
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        
        <div>
          <label>Gender<b>*</b></label><br/>
          <select name="gender" onChange={onChange}>
          <option value="none">
            Select Gender
          </option>
          <option value="1">Male</option>
          <option value="2">Female</option>
        </select>
        </div>
        <button>Submit</button>
        <div>
          <p>Name : {values.name }</p>
          <p>Email : {values.email }</p>
          <p>Tel : {values.tel }</p>
          <p>Address : {values.address }</p>
          <p>Gender : {values.gender }</p>
        </div>
      </form>
    </div>
  );
};

export default App;
