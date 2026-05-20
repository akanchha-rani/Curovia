import AuthForm from "@/components/auth/AuthForm";

export const metadata = {
  title: 'Join Curovia as Healthcare Provider',
  description: 'Register as a healthcare provider on Curovia to offer online consultations.',
};


export default function DoctorSignUpPage() {
  return  <AuthForm type='signup' userRole='doctor'/>
}