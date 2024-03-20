interface Item {
  image: string;
  title: string;
  discount: string;
}

const HomeCatalogCard = (item: Item, idx: number) => {
  return (
    <li
      className="home-catalog-bottom-item"
      style={{ backgroundImage: `url(${item.image})` }}
      key={idx}
    >
      <p>{item.title}</p>
      <span className="home-catalog-bottom-item__discount">
        {item.discount}
      </span>
    </li>
  );
};

export default HomeCatalogCard;
