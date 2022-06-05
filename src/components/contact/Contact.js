import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Heading from "../layout/Heading";
import Button from "react-bootstrap/Button";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter your first name")
    .min(3, "First name must be at least 3 characters"),
  lastName: yup
    .string()
    .required("Please enter your last name")
    .min(4, "Last name must be at least 4 characters"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  subject: yup.string().required("Please choose one option"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <div className="contact">
      <Heading>Contact Us</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First name:
          <input {...register("firstName")} />
        </label>
        {errors.firstName && <span>{errors.firstName.message}</span>}

        <label>
          Last name:
          <input {...register("lastName")} />
        </label>
        {errors.lastName && <span>{errors.lastName.message}</span>}

        <label>
          You are:
          <select {...register("subject")}>
            <option value="value1">Private person</option>
            <option value="value2">Company</option>
          </select>
        </label>
        {errors.subject && <span>{errors.lastName.message}</span>}

        <label>
          Your email:
          <input {...register("email")} />
        </label>
        {errors.email && <span>{errors.email.message}</span>}

        <label>
          Your message:
          <textarea {...register("message")} />
        </label>
        {errors.message && <span>{errors.message.message}</span>}

        <Button type="submit" variant="secondary">
          Send
        </Button>
      </form>
    </div>
  );
}

export default Contact;
