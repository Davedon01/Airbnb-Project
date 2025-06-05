import { useState, ChangeEvent, FormEvent } from "react";

// Define structure for form values
interface FormData {
  firstName: string;
  lastName: string;
  birthdate: string;
  email: string;
  countryCode: string;
  phone: string;
  password: string;
}

function SignUp() {
  const countryCodes = [
    { code: "+1", label: "🇺🇸 +1" },
    { code: "+44", label: "🇬🇧 +44" },
    { code: "+91", label: "🇮🇳 +91" },
    { code: "+61", label: "🇦🇺 +61" },
    { code: "+81", label: "🇯🇵 +81" },
    { code: "+49", label: "🇩🇪 +49" },
    { code: "+33", label: "🇫🇷 +33" },
    { code: "+7", label: "🇷🇺 +7" },
    { code: "+55", label: "🇧🇷 +55" },
    { code: "+234", label: "🇳🇬 +234" },
  ];

  const todayDate = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    birthdate: "",
    email: "",
    countryCode: "+91",
    phone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  // Password rules: uppercase, lowercase, number, and symbol
  const validatePassword = (password: string) => {
    return (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~`]/.test(password)
    );
  };

  // Validation logic
  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!form.birthdate.trim()) {
      newErrors.birthdate = "Birthdate is required";
    } else if (form.birthdate > todayDate) {
      newErrors.birthdate = "Birthdate cannot be in the future";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Email format is invalid";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{6,15}$/.test(form.phone)) {
      newErrors.phone = "Phone number must be 6 to 15 digits";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!validatePassword(form.password)) {
      newErrors.password = "Password must include uppercase, lowercase, number, and symbol";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Update input values
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  // Form submission
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (validate()) {
      alert("Sign up successful!");
      setForm({
        firstName: "",
        lastName: "",
        birthdate: "",
        email: "",
        countryCode: "+91",
        phone: "",
        password: "",
      });
      setShowPassword(false);
      setErrors({});
    }
  };

  return (
    <div className="max-w-full">
      <div className="bg-white p-8 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className={`mt-1 block w-full p-3 border rounded-md shadow-sm sm:text-sm ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstName && <p className="mt-1 text-red-500 text-sm">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className={`mt-1 block w-full p-3 border rounded-md shadow-sm sm:text-sm ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.lastName && <p className="mt-1 text-red-500 text-sm">{errors.lastName}</p>}
          </div>

          {/* Birthdate */}
          <div>
            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">Birthdate</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              max={todayDate}
              value={form.birthdate}
              onChange={handleChange}
              className={`mt-1 block w-full p-3 border rounded-md shadow-sm sm:text-sm ${
                errors.birthdate ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.birthdate && <p className="mt-1 text-red-500 text-sm">{errors.birthdate}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className={`mt-1 block w-full p-3 border rounded-md shadow-sm sm:text-sm ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Phone Number with Country Code */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="flex gap-2">
              <select
                id="countryCode"
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
                className="p-3 border rounded-md w-1/3 sm:text-sm"
              >
                {countryCodes.map(({ code, label }) => (
                  <option key={code} value={code}>{label}</option>
                ))}
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
                className={`w-2/3 p-3 border rounded-md shadow-sm sm:text-sm ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>
            {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                minLength={8}
                className={`mt-1 block w-full p-3 border rounded-md shadow-sm sm:text-sm pr-10 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <p className="mt-1 text-gray-600 text-xs">
              Must include uppercase, lowercase, number, and symbol.
            </p>
            {errors.password && <p className="mt-1 text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-rose-400 via-rose-600 to-rose-700 text-white font-bold py-3 px-4 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
