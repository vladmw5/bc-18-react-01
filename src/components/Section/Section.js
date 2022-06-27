const Section = ({ title, children, buttonTitle, buttonType }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
      <button>{buttonTitle}</button>
    </section>
  );
};

export default Section;
