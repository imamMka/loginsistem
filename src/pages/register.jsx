import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(1, "Username is required").min(8, "Username must be at least 8 characters long"),
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters long")
});

export default function Register() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: zodResolver(schema)
    });

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#bde0fe]">
      <section className="flex flex-col justify-center items-center bg-[#003566] p-5 rounded-lg shadow-md w-120">
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
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
                
            <div className="flex flex-col text-white">
              <label htmlFor="">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="bg-[#001d3d] p-3 rounded-md w-full"
                {...register("username")}
              />
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
            </div>

            <div className="flex flex-col text-white">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#001d3d] p-3 rounded-md w-full"
                {...register("email")}                
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="flex flex-col text-white">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-[#001d3d] p-3 rounded-md w-full"
                {...register("password")}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            <button
              className="bg-[#219ebc] text-white px-4 py-3 rounded-xl cursor-pointer w-full"
              type="submit"
            >
              
              Create Account
            </button>
          </div>
          <a onClick={() => navigate("/")} className="text-blue-400 hover:underline mt-4">Back to login page</a>
        </form>
      </section>
    </main>
  );
}
