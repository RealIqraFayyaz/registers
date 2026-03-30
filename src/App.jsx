import Navbar from "./components/Navbar";
import FirstName from "./components/FirstName";
import LastName from "./components/LastName";
import Gender from "./components/Gender";
import Email from "./components/Email";
import Password from "./components/Password";
import Birthday from "./components/Birthday";
import Terms from "./components/Terms";
import SubmitButton from "./components/SubmitButton";

export default function App() {
  return (
    <>
    <form>
      <Navbar />
      <FirstName />
      <LastName />
      <Gender />
      <Email />
      <Password />
      <Birthday />
      <Terms />
      <SubmitButton />
    </form>
    </>
  );
}