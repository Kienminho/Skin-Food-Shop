import CardList from "../card/card-list";

const ItemByCategory = () => {
  return (
    <div className="flex flex-col gap-10 mb-10 mt-8">
      <div>
        <h2 className="text-center text-5xl font-bold text-t-red mb-8">
          Skincare
        </h2>
        <CardList />
      </div>
      <div>
        <h2 className="text-center text-5xl font-bold text-primary-color mb-8">
          Bodycare
        </h2>
        <CardList />
      </div>
      <div>
        <h2 className="text-center text-5xl font-bold text-t-red mb-8">
          Haircare
        </h2>
        <CardList />
      </div>
    </div>
  );
};

export default ItemByCategory;
