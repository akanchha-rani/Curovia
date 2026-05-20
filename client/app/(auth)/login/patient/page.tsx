import AuthForm from "@/components/auth/AuthForm";

export const metadata = {
  title: 'Patient Login - Curovia',
  description: 'Sign in to your Curovia account to access healthcare consultations.',
};

export default function PatientLoginPage() {
  return  <AuthForm type='login' userRole='patient'/>
}