import React, { useState } from "react";
import ContactForm from "./CTAForm";
import { Typography } from "@mui/material";

const Contact: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);

  const handleFormSubmit = (data: { name: string }) => {
    setMessage(`Message generated on the server. User: ${data.name}`);
  };

  return (
    <div>
      {message ? (
        <Typography variant="h4" align={"center"}>
          {message}
        </Typography>
      ) : (
        <ContactForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default Contact;
