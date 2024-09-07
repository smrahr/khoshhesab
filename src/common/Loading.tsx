import { ThreeDots } from "@imports";

function Loading({ width = "75", heigh = "40", color = "white" }) {
  return (
    <ThreeDots
      height={heigh}
      width={width}
      radius="9"
      color={color}
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
      visible={true}
    />
  );
}
export default Loading;
