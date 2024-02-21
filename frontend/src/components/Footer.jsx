const Footer = () => {
  return (
    <footer className="bg-text-color mt-5 grid grid-cols-2 items-center p-5">
      <div className="grid grid-rows-2 gap-6">
        <p className="text-secondary text-xs">
          Адрес: г. Минск, пер. Добромысленский, д.3.
        </p>
        <p className="text-secondary text-xs">Контакты: (017) 239-40-75</p>
      </div>
      <div>
        <ul className="grid justify-items-end">
          <li>
            <a href="#" className="text-primary hover:text-secondary">
              instagram
            </a>
          </li>
          <li>
            <a href="#" className="text-primary hover:text-secondary">
              uClients
            </a>
          </li>
          <li>
            <a href="#" className="text-primary hover:text-secondary">
              E-mail
            </a>
          </li>
          <li>
            <a href="#" className="text-primary hover:text-secondary">
              VK
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
