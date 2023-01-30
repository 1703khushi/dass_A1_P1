import React, {useState} from "react";
export const Register = (props) => {
  const [f_name, setF_name] = useState("");
  const [l_name, setL_name] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [contact_num, setContanct_num] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // this is because nhi to page refresh hojayega and state lose krdega
    console.log(f_name);
    console.log(l_name);
    console.log(username);
    console.log(email);
    console.log(age);
    console.log(contact_num);
    console.log(pass);
  };
  return (
    <div className="form_cont">
      <h2 className='text'>Register</h2>
      <form className="register_form" onSubmit={handleSubmit}>
        <input
          value={f_name}
          onChange={(e) => setF_name(e.target.value)}
          type="first_name"
          placeholder="First Name"
          id="first_name"
          name="first_name"
          required
        />
        <input
          value={l_name}
          onChange={(e) => setL_name(e.target.value)}
          type="last_name"
          placeholder="Last Name"
          id="last_name"
          name="last_name"
          required
        />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="username"
          placeholder="Username"
          id="username"
          name="username"
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          required
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="age"
          placeholder="Age"
          id="age"
          name="age"
          required
        />
        <input
          value={contact_num}
          onChange={(e) => setContanct_num(e.target.value)}
          type="contact_num"
          placeholder="Contact Number"
          id="contact_num"
          name="contact_num"
          required
        />
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          required
        />
        <button className="l_btn" type="submit">Register</button>
      </form>
      <button className="link_btn" onClick={()=>props.onFormSwitch('login')}>Already have an account? Login</button>
    </div>
  );
};
