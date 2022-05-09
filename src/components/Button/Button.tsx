const Button = ({ children }: { children: any }) => {
  return (
    <a
      href="#"
      style={{
        marginLeft: 10,
        width: 40,
        height: 40,
        marginBottom: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        opacity: 0.85,
      }}
    ></a>
  );
};

export default Button;
