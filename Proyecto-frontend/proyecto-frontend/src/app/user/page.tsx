import { UserProvider } from "@/stores/useUserStore";
import UserLogin from "@/modules/user/userLogin";

export default function PageUser() {
  return (
    <UserProvider>
      <UserLogin />
    </UserProvider>
  );
}