import Anchor from "../components/elements/Anchor";
import { Route, Routes } from "react-router-dom";
import MyAppointments from "./Account/MyAppoitments";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Account = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handlerLogout = () => {
    logout();
  };

  return (
    <div>
      <h2 className="mb-16 mt-8 text-center text-6xl text-text-color md:text-left md:text-7xl xl:text-8xl">
        Профиль
      </h2>
      {user ?  <div className="flex grid-cols-5 flex-col md:grid md:gap-[5vw]">
        <section>
          <nav className="flex flex-col items-center md:items-start">
            <Anchor to={"/account/myappointments"}>Мои записи</Anchor>
            <Anchor>Мои курсы</Anchor>
            <Anchor>Мои сертификаты</Anchor>
            <button
              className="block w-fit border-text-color py-[2px] text-text-color hover:border-y-2 hover:border-solid hover:py-0 focus:border-y-2 focus:border-solid focus:py-0"
              onClick={handlerLogout}
            >
              Выход
            </button>
          </nav>
        </section>
        <section className="col-span-4">
          <Routes>
            <Route path="/myappointments" element={<MyAppointments />} />
          </Routes>
        </section>
        <section></section>
        <section></section>
        <section></section>
      </div> : <div className="flex justify-center"><span className="text-text-color flex items-baseline">Пожалуйста,&nbsp;<Anchor to={'/login'}>войдите&nbsp;</Anchor>или&nbsp;<Anchor to={'/signup'}>зарегистрируйтесь</Anchor></span></div>}
     
    </div>
  );
};

export default Account;
