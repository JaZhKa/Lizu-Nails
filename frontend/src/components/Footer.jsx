const Footer = () => {
  return (
    <footer className="bottom-0 mt-5 grid grid-cols-2 md:grid-cols-3 items-center bg-text-color p-5">
      <div className="grid grid-rows-2 gap-6">
        <p className="text-xs text-secondary">
          Адрес: г. Минск, пер. Добромысленский, д.3.
        </p>
        <p className="text-xs text-secondary">Контакты: (017) 239-40-75</p>
      </div>
      <div className="hidden md:grid justify-items-center">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A1f6696b79cfcbb35e108cb6e494559d0c92cd0e3ff562da4484588b12b16cf47&amp;source=constructor"
          width="320"
          height="240"
          frameBorder="0"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <ul className="grid justify-items-end">
          <li>
            <a href="https://www.instagram.com/lizunails" className="text-primary hover:text-secondary">
              instagram
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@lizunails8" className="text-primary hover:text-secondary">
              Tik-Tok
            </a>
          </li>
          <li>
            <a href="mailto:lizazueva701@gmail.com" className="text-primary hover:text-secondary">
              E-mail
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
