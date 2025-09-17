import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    name: z.string().min(1, "Name is required"),
    age: z.preprocess(
      (value) => (typeof value === "string" ? parseInt(value, 10) : value),
      z
        .number(1, "Age is required")
        .min(1, "Age is required")
        .min(18, "You must be at least 18 years old")
        .max(60, "You must be at least 60 years old")
        .optional()
    ),
    username: z
      .string()
      .min(1, "Username is required")
      .min(8, "Username must be at least 8 characters long")
      .max(50, "Username must be at most 50 characters long"),
    email: z
      .string()
      .email(1, "Email is required")
      .email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one capital letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <main className="h-full w-full flex flex-col justify-center items-center bg-[#bde0fe]">
      <section className="flex flex-col justify-center items-center bg-[#003566] p-5 rounded-lg shadow-md w-120 my-5">
        <form onSubmit={handleSubmit()}>
          <div className="flex flex-col justify-center items-center mb-6 text-white">
            <h1 className="text-4xl font-bold mb-4 text-center">
              Create an account
            </h1>
            <p className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur, deleniti!
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col text-white">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-[#001d3d] p-3 rounded-md w-full"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="flex flex-col text-white">
              <label htmlFor="">Age</label>
              <input
                type="number"
                placeholder="Enter your age"
                className="bg-[#001d3d] p-3 rounded-md w-full"
                {...register("age")}
              />
              {errors.age && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.age.message}
                </p>
              )}
            </div>

            <div className="flex flex-col text-white">
              <label htmlFor="">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="bg-[#001d3d] p-3 rounded-md w-full"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div className="flex flex-col text-white">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#001d3d] p-3 rounded-md w-full"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col text-white">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-[#001d3d] p-3 rounded-md w-full"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex flex-col text-white">
              <label htmlFor="">Confirm Your Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-[#001d3d] p-3 rounded-md w-full"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              className="bg-[#219ebc] text-white px-4 py-3 rounded-xl cursor-pointer w-full"
              type="submit"
            >
              Create Account
            </button>
          </div>
          <a
            onClick={() => navigate("/")}
            className="text-blue-400 hover:underline mt-4"
          >
            Back to login page
          </a>
        </form>
      </section>
    </main>
  );
}
