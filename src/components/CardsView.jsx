import ShopCard from './ShopCard';

function CardsView({ cards }) {
  return (
    <div className="cards-view">
      {cards.map((card) => (
        <ShopCard key={card.id} item={card} />
      ))}
    </div>
  );
}

export default CardsView;
