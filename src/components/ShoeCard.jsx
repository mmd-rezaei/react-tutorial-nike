const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImg(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className="flex justify-center items-center bg-card bg-center 
      bg-cover sm:w40 sm:h-40 rounded-xl max-sm:p-4"
      >
        <img
          src={imgURL.thumbnail}
          alt="Shoes"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
