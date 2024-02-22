import React, { useState } from "react";
import Typography from "@mui/material/Typography";

export default function Login() {
  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState(" ");

  return (
    <>
      <div className="login">
        <div className="image_main">
          <img src="Banner_v2.jpg" alt=".." />
        </div>

        <div className="profile">
          <div className="profile_main">

            <Typography variant="h3" display="block" className="h6">
                Log in
              </Typography>

            <div>
              <Typography variant="h6" display="block" className="h6">
                Email
              </Typography>
              <input type="email" onChange={(e)=>{setemail(e.target.value)}} value={email} />
            </div>

            <div>
              <Typography variant="h6" display="block" className="h6">
                Password
              </Typography>
              <input
                type="email"
                onChange={(e)=>{setpassword(e.target.value)}}
                value={password}
              />
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}