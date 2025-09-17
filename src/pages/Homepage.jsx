import "../index.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z
    .string()
    .min(1, "Username or Email is required")
    .min(5, "Username must be at least 5 characters long"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one capital letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
});

export default function Homepage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ 
    resolver: zodResolver(schema),
  });

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#bde0fe]">
      <section className="flex flex-col justify-center items-center bg-[#003566] p-5 rounded-lg shadow-md w-120">
        <form onSubmit={handleSubmit()}>
          <div className="flex flex-col justify-center items-center mb-6 text-white">
            <h1 className="text-4xl font-bold mb-4 text-center">
              Welcome to our website
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
              cupiditate!
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col text-white">
              <label htmlFor="">Username</label>
              <input
                type="text"
                placeholder="Enter your username or email"
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
              <a
                onClick={() => navigate("/forgot-password")}
                className="text-blue-400 hover:underline text-[14px]"
              >
                Forget your password?
              </a>
            </div>
            <button
              className="bg-[#219ebc] text-white px-4 py-3 rounded-xl cursor-pointer w-full"
              type="submit"
            >
              Login
            </button>
          </div>

          <p className="text-white">
            Don't have an account yet?{" "}
            <a
              onClick={() => navigate("/Register")}
              className="text-blue-400 hover:underline"
            >
              Register
            </a>
          </p>
        </form>
      </section>
    </main>
  );
}
