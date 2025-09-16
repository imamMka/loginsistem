import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    email: z.string().min(1, "Email is required")
});

export default function ForgotPassword() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    })

    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-[#bde0fe]">
        <section className="flex flex-col justify-center items-center bg-[#003566] p-5 rounded-lg shadow-md w-120">
            <form onSubmit={handleSubmit()}>
                <div className="flex flex-col justify-center items-center mb-6 text-white">
                    <h1 className="text-4xl font-bold mb-4 text-center">
                        Forgot Your Password?
                    </h1>
                    <p className="text-center">
                        Enter your email address below and we'll send you a link to reset your password.
                    </p>
                </div>
                <div className="flex flex-col text-white mb-4">
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-[#001d3d] p-3 rounded-md w-full"
                        {...register("email")}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <button
                    className="bg-[#219ebc] text-white px-4 py-3 rounded-xl cursor-pointer w-full"
                    type="submit"
                >
                    Send Reset Link
                </button>
                <a onClick={() => navigate("/")} className="text-blue-400 hover:underline mt-4">Back to login page</a>
            </form>
        </section>
        </main>
    )
}