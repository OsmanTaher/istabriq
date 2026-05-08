"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type FormValues = {
  phone: string;
  password: string;
};

const schema = z.object({
  phone: z
    .string()
    .regex(/^[0-9]+$/, "رقم الجوال يجب أن يحتوي على أرقام فقط")
    .min(8, "رقم الجوال غير صالح"),
  password: z.string().min(6, "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل"),
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { phone: "", password: "" },
  });

  const onSubmit = async (data: FormValues) => {
    // TODO: implement login logic (call API, set auth, redirect, etc.)
    console.log("TODO: submit login", data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-stretch gap-8">
          {/* Login card (left) */}
          <div className="w-full md:w-1/2 flex items-center">
            <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-md p-8 rtl text-right">
              <h1 className="text-2xl font-semibold text-emerald-600 text-center">
                تسجيل الدخول
              </h1>
              <p className="mt-2 text-sm text-gray-600 text-center">
                مرحبا بك في نور الايمان، يرجى تسجيل الدخول لتكمل تجربة التسوق
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-6 space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    رقم الجوال
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="05xxxxxxxx"
                    className="mt-1 block w-full rounded-md border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600">
                      {String(errors.phone.message)}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    كلمة المرور
                  </label>
                  <div className="mt-1 relative">
                    <input
                      {...register("password")}
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="block w-full rounded-md border border-gray-200 shadow-sm px-3 pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      aria-label={
                        showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7a9.96 9.96 0 012.536-4.93M6.38 6.38A9.953 9.953 0 0112 5c5 0 9 4 9 7 0 1.16-.27 2.26-.76 3.24M3 3l18 18"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-600">
                      {String(errors.password.message)}
                    </p>
                  )}
                </div>

                <div className="flex justify-start">
                  <Link
                    href="#"
                    className="text-sm text-emerald-600 hover:underline"
                  >
                    نسيت كلمة المرور؟
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 px-4 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
                >
                  تسجيل الدخول
                </button>
              </form>

              <div className="mt-4 text-center text-sm">
                <span className="text-gray-600">لا تملك حساب؟ </span>
                <Link
                  href="/sign-up"
                  className="text-emerald-600 font-medium hover:underline"
                >
                  سجل الآن
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <div className="h-full w-full bg-gray-100 rounded-2xl md:rounded-none md:rounded-l-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
