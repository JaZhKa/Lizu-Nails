import Button from "../components/elements/Button";
import img404 from './../assets/images/404_min.jpg';

const NotFound = () => {
  return <div className="flex flex-col items-center gap-12">
    <img src={img404} alt="Not Found" />
    <Button onClick={() => window.history.back()}>Назад</Button>
  </div>;
}

export default NotFound;