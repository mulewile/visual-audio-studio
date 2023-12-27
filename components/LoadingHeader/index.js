const LoadingComponent = () => {
  const loadingStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "black",
    color: "white",
    padding: "1rem",
    borderRadius: "5px",
  };

  return (
    <h1 style={loadingStyles}>
      <span style={{ color: "orange" }}>
        Loading<span>...</span>
      </span>
    </h1>
  );
};

export default LoadingComponent;
