import ProfilePage from "@/components/ProfilePage/ProfilePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Profile | Curovia",
  description: "View and manage your doctor profile in Curovia platform.",
};

export default function Page() {
  return  <ProfilePage userType='patient'/>
}