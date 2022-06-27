import Button from "../Button/Button";
import UserTitle from "../UserTitle/UserTitle";

function Sidebar({ buttons, user }) {
  return (
    <>
      <div>
        {buttons.map(({ name }) => (
          <Button title={name} key={name} />
        ))}
      </div>
      <div>
        <UserTitle title={user.name} img={user.img} />
      </div>
    </>
  );
}

export default Sidebar;
