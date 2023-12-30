import CardItem from "./card-item";

// eslint-disable-next-line react/prop-types
const CardList = ({ items = [1, 2, 3, 4] }) => {
  return (
    <div className="gap-4 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center justify-center">
      {items.map((item, index) => (
        <CardItem key={index} />
      ))}
    </div>
  );
};

export default CardList;
