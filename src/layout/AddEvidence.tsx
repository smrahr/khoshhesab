import { TiPlus, Button } from "@imports";

const AddEvidence = () => {
  return (
    <div className="w-full h-full bg-tertiary-900 text-white rounded-t-lg border border-white">
      <Button
        className={`w-full h-full flex justify-center items-center gap-1`}
        disabled={false}
      >
        <TiPlus />
        <p>افزودن سند جدید</p>
      </Button>
    </div>
  );
};

export default AddEvidence;
