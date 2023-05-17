import React, { useState } from "react";
import bcrypt from "bcryptjs";
import supabase from "../../supabaseClient";

function SignInForm() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const registerUser = async (event) => {
    event.preventDefault();

    // Encripta la contraseña
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Guarda el avatar en el almacenamiento de Supabase
    const { data: file, error: fileError } = await supabase.storage
      .from("avatars")
      .upload(`${email}/avatar`, avatar);

    if (fileError) {
      console.log(fileError);
      return { success: false, error: fileError.message };
    } else {
      // Guarda el usuario en la tabla "usuarios" de Supabase
      const { data: user, error: registrationError } = await supabase
        .from("usuarios")
        .insert({
          name,
          email,
          password: hashedPassword,
          avatar: file ? file.Key : null, // Guarda la URL del archivo en el campo "avatar"
        });

      console.log(file.Key);

      if (registrationError) {
        console.log(registrationError);
        return { success: false, error: registrationError.message };
      } else {
        // Autentica al usuario
        const { user: authenticatedUser, error: signInError } =
          await supabase.users.signIn({
            email,
            password,
          });
        if (signInError) {
          console.log(signInError);
          return { success: false, error: signInError.message };
        } else if (!authenticatedUser) {
          console.log("Authentication failed");
          window.location.href = "/login";
          return { success: false, error: "Authentication failed" };
        } else {
          console.log(authenticatedUser);
          // Redirige al usuario a la pagina de inicio
          window.location.href = "/";
          return { success: true };
        }
      }
    }
  };

  return (
    <>
      <div className="w-3/6 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center px-6 py-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-black mb-6">
          Log In
        </h1>
        <form className="space-y-4 md:space-y-6 w-full px-6" action="#">
          <div className="flex items-center justify-between gap-4">
            <button class="w-2/4 py-4 border-2 flex items-center justify-center gap-3 border-black rounded-lg text-black hover:text-white hover:bg-black transition">
              <img
                class="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span>Log In with Google</span>
            </button>
            <button class="w-2/4 py-4 border-2 flex items-center justify-center gap-3 border-black rounded-lg text-black hover:text-white hover:bg-black transition">
              <img
                class="w-6 h-6"
                src="https://www.svgrepo.com/show/183607/facebook.svg"
                loading="lazy"
                alt="facebook logo"
              />
              <span>Log In with Facebook</span>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-full bg-gray-500 h-1"></div>
            <p className="text-lg text-gray-500 font-medium mx-4">or</p>
            <div className="w-full bg-gray-500 h-1"></div>
          </div>
          <div>
            <label for="email" className="text-lg font-medium">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="cursor-pointer mt-2 bg-gray-200 border-2 border-gray-200 hover:border-2 focus:ring-0 focus:border-black text-black text-xl rounded-md block w-full p-4"
              required
            />
          </div>
          <div>
            <label for="password" className="text-lg font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="cursor-pointer mt-2 bg-gray-200 border-2 border-gray-200 hover:border-2 focus:ring-0 focus:border-black text-black text-xl rounded-md block w-full p-4"
              required
            />
          </div>
          <button
            type="submit"
            className="transition w-full text-white hover:text-black border-2 border-black bg-black hover:bg-white font-medium rounded-lg text-md px-4 py-3 text-center"
          >
            Log In
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Register here
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignInForm;
