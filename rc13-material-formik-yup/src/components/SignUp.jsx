import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { deepPurple } from "@mui/material/colors";
import { Formik, Form } from "formik";
import * as yup from "yup";

const SignUpForm = (props) => {
  console.log(props);
  const { values, handleChange, handleBlur, errors, touched } = props;
  return (
    <Form>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <TextField
            id="firstName"
            label="First Name"
            name="firstName"
            variant="outlined"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.firstName && errors.firstName}
            error={touched.firstName && Boolean(errors.firstName)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="lastName"
            label="Last Name"
            name="lastName"
            variant="outlined"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.lastName && errors.lastName}
            error={touched.lastName && Boolean(errors.lastName)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            label="email"
            name="email"
            variant="outlined"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            label="password"
            name="password"
            variant="outlined"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="passwordConfirm"
            label="password confirm"
            name="passwordConfirm"
            variant="outlined"
            type="password"
            value={values.passwordConfirm}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.passwordConfirm && errors.passwordConfirm}
            error={touched.passwordConfirm && Boolean(errors.passwordConfirm)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ bgcolor: deepPurple[500] }}
          >
            Signup
          </Button>
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end" sx={{ mt: 4 }}>
        <Link href="/signin">Sie haben bereits ein Konto?</Link>
      </Grid>
    </Form>
  );
};
const signUpValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "Too Short")
    .max(15, "Must be 15 char or less"),
  lastName: yup
    .string()
    .required("last name is required")
    .min(2, "Too Short")
    .max(30, "Must be 15 char or less"),
  email: yup.string().email("ınvalid Email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Must be more than 8 chars")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have a uppercase")
    .matches(/[!?.*@$#%&^()-+]+/, "Password must have a special character"),
  passwordConfirm: yup
    .string()
    .required("Password is required")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});

const SignUp = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: deepPurple[500], m: 2 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
          Signup
        </Typography>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirm: "",
          }}
          validationSchema={signUpValidationSchema}
          onSubmit={(values, actions) => {
            alert(`firstName: ${values.firstName}
            lastName: ${values.lastName}
             email: ${values.email}
             password: ${values.password}
            `);
            actions.resetForm();
            actions.setSubmitting(false);
          }}
          component={(props) => <SignUpForm {...props} />}
        ></Formik>

        <Typography color="gray" align="center" variant="body2" sx={{ mt: 4 }}>
          Copyright ©<Link href="https://www.clarusway.com"> Clarusway</Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUp;
