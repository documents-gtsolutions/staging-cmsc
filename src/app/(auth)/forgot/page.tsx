"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import EmailInput from "@/components/Inputs/EmailInput";
import TextInput from "@/components/Inputs/TextInput";
import PasswordInput from "@/components/Inputs/PasswordInput";

type ForgotFormValues = {
  email: string;
  otp: string;
  password: string;
  confirmPassword: string;
};

const Forgot = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [step, setStep] = useState<"email" | "otp" | "reset">("email");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ForgotFormValues>({
    defaultValues: {
      email: "",
      otp: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    if (id) {
      setStep("reset");
    }
  }, [id]);

  // Countdown effect
  useEffect(() => {
    if (timer > 0 && step === "otp") {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }else{
      setTimer(0);
    }
  }, [timer]);

  const onSubmit = (data: ForgotFormValues) => {
    setLoading(true);
    try {
      if (step === "email") {
        // Send OTP
        console.log("Sending OTP", data.email);
        setStep("otp");
        setTimer(60); // start timer first time
      } else if (step === "otp") {
        // Verify OTP
        console.log("OTP Verified", data);
        setStep("reset");
      } else {
        // Reset Password
        console.log("Reset Password", data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // 🔑 Handle resend OTP (Continue button when already in otp step)
  const handleResendOtp = () => {
    const email = getValues("email"); // get entered email
    console.log("Resending OTP to:", email);
    setTimer(60); // reset timer to 60s
  };

  return (
    <div className="w-full max-w-[506px] my-16 mx-auto">
      <Card className="bg-white shadow-lg border-0 gap-8 p-8 rounded-4xl">
        <Button
          className="w-fit rounded-full gap-2"
          onClick={step === "email" ? () => router.push("/login") : () => setStep("email")}
        >
          <ArrowLeftIcon size={20} /> Back
        </Button>

        <div>
          <h1 className="text-gray-950 text-2xl font-semibold mb-3">
            {id ? "Create" : "Lost your password?"}
            <br />
            {id ? "New Password" : "Enter your detail to recover"}
          </h1>
          <p className="text-gray-700 text-sm">
            {id
              ? "Please make sure the password is not the same as the previous password."
              : "Please enter your email address to send the OTP verification code."}
          </p>
        </div>

        <CardContent className="p-0">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Step 1: Email */}
            {(step === "email" || step === "otp") && (
              <>
                <EmailInput
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  register={register}
                  errors={errors}
                  required
                />
                <Button
                  className="py-[18px] h-fit w-full rounded-full"
                  type={step === "otp" ? "button" : "submit"}
                  disabled={loading || timer > 0}
                  onClick={step === "otp" ? handleResendOtp : undefined}
                >
                  {loading ? "Sending OTP..." : "Continue"}
                </Button>
              </>
            )}

            {/* Step 2: OTP */}
            {step === "otp" && (
              <>
                {timer > 0 && (
                  <div className="text-center text-red-400 text-base font-semibold">
                    {timer} Sec
                  </div>
                )}

                <TextInput
                  id="otp"
                  label="OTP"
                  type="text"
                  placeholder="Enter your OTP"
                  register={register}
                  errors={errors}
                  required
                />

                <Button
                  type="submit"
                  variant="gradient"
                  className="py-[18px] h-fit"
                  disabled={loading}
                >
                  {loading ? "Verifying OTP..." : "Submit"}
                </Button>
              </>
            )}

            {/* Step 3: Reset Password */}
            {(step === "reset" || id) && (
              <>
                <PasswordInput
                  id="password"
                  label="Password"
                  placeholder="Enter your password"
                  register={register}
                  errors={errors}
                />
                <PasswordInput
                  id="confirmPassword"
                  label="Confirm Password"
                  placeholder="Enter your confirm password"
                  register={register}
                  errors={errors}
                />

                <Button
                  type="submit"
                  variant="gradient"
                  className="py-[18px] h-fit"
                  disabled={loading}
                >
                  {loading ? "Resetting Password..." : "Submit"}
                </Button>
              </>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Forgot;
