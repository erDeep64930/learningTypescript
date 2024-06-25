import AdminInfo from "@/components/AdminInfo";
import User from "@/components/User";
import UserInfo from "@/components/UserInfo";

export default function Home() {
  return (
    <div>
      <User name="dhruvi" age={2} isStudent={false} />
      <UserInfo
        username="alex"
        email="alex@gmail.com"
        age={20}
        location={["earth", "germany"]}
      />
      <AdminInfo username="deep"
        email="deep@gmail.com"
        age={20}
        location={["earth", "germany"]}
        admin="yes"/>
    </div>
  );
}
