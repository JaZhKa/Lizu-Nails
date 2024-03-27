const Me = ({user}) => {

  return (
    <div className="mt-8 flex flex-col items-center md:block">
      <h3 className="mb-8 text-start text-3xl text-text-color md:text-4xl xl:text-5xl">
        {user.name}
      </h3>
      <p className="text-text-color">{user.email}</p>
      <p className="text-text-color">{user?.contacts?.phoneNumber}</p>
      <p className="text-text-color">{user?.contacts?.instagramNickname}</p>
    </div>
  );
};

export default Me;
