// types import
import { Shoe } from "@/types";

type Props = {
  shoe: Shoe;
  bigShoeImg: string;
  changeBigShoe: (newBigShoeImg: string) => void;
};

const ShoeCard = ({ shoe, bigShoeImg, changeBigShoe }: Props) => {
  const handleShoeImageClick = () => {
    if (bigShoeImg !== shoe.bigShoe) {
      changeBigShoe(shoe.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        shoe.bigShoe === bigShoeImg ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleShoeImageClick}
    >
      <div
        className="flex justify-center items-center bg-card bg-center bg-cover 
        sm:w-40 sm:h-40 rounded-xl max-sm:p-4"
      >
        <img
          src={shoe.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
