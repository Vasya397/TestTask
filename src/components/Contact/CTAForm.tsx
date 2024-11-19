import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, Typography, TextField, Button } from "@mui/material";
import { formStyles } from "./CTAForm.styles";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Box sx={formStyles.container}>
      <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
        Only CTA on the page
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={formStyles.form}
      >
        {/* Поле Name */}
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        {/* Поле Email */}
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i,
              message: "Invalid email address",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        {/* Поле Message */}
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          {...register("message", { required: "Message is required" })}
          error={!!errors.message}
          helperText={errors.message?.message}
        />

        {/* Кнопка Submit */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={formStyles.button}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
