const MyParagraph = (props) => {
  console.log("MyParagraph Executed");

  return <p>{props.children}</p>;
};

export default MyParagraph;
