import { TiPlus, Button } from "@imports";

const Footer = () => {
  return (
    <div className="w-full h-full bg-tertiary-900 text-white rounded-t-lg">
      <Button
        className={`w-full h-full flex justify-center items-center gap-1`}
        disabled={false}
      >
        <TiPlus />
        <p>افزودن سند جدید</p>{" "}
      </Button>
    </div>
  );
};

export default Footer;
