import { Grid, TextField, Button, Link } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Form } from "formik";

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

export default SignUpForm;
