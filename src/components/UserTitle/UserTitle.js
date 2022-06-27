const UserTitle = ({ title, img }) => {
  return (
    <button>
      {title}
      <img src={img} alt={title} />
    </button>
  );
};

export default UserTitle;
