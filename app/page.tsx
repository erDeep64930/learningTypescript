import AdminInfo from "@/components/AdminInfo";
import Counter from "@/components/Counter";
import ElementWrapper from "@/components/ElementWrapper";
import Form from "@/components/Form";
import User from "@/components/User";
import UserInfo from "@/components/UserInfo";

export default function Home() {
  return (
    <>
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
        <Counter />
        <Form />
        <ElementWrapper />
    </>
  );
}
