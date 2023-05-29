import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export default function RegisterForm() {
    return (
      <Card color="transparent" shadow={false} className="text-[#fdfcfa]">
        <h4>
          Sign Up
        </h4>
        <p className="mt-2">
          Enter your details to register.
        </p>
        <form className="mt-8 mb-2 w-[100%] max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" color="white"/>
            <Input size="lg" label="Email" color="white" />
            <Input type="password" size="lg" label="Password" color="white" />
          </div>
          <Checkbox
            label={
              (
                <p>
                  I agree the &nbsp;Terms and Conditions
                </p>
              )
            }
            containerProps={{ className: "-ml-2.5" }}
            color="yellow"
          />
          <button className="px-12 text-center font-bold py-4 text-black bg-[#FECE2F] rounded-[4px] w-[100%] mt-6" >
            Register
          </button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <p
              className="font-medium text-[#FECE2F] transition-colors hover:text-blue-700"
            >
              Sign In
            </p>
          </Typography>
        </form>
      </Card>
    );
  }