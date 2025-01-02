export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "Burger",
      price: 149,
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Pizza",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      name: "Desert",
      price: 99,
      image:
        "https://img.freepik.com/free-photo/high-angle-jar-dessert-with-biscuits-donut_23-2148603282.jpg?ga=GA1.1.1955477534.1725112092",
    },
    {
      id: 4,
      name: "Tacos",
      price: 199,
      image:
        "https://img.freepik.com/free-photo/delicious-tacos-arrangement_23-2151047929.jpg?ga=GA1.1.1955477534.1725112092&semt=ais_hybrid",
    },
    {
      id: 5,
      name: "Cocktail",
      price: 159,
      image:
        "https://img.freepik.com/free-photo/high-angle-mix-alcoholic-drinks_23-2148673763.jpg?ga=GA1.1.1955477534.1725112092&semt=ais_hybrid",
    },
    {
      id: 6,
      name: "Shawarma",
      price: 179,
      image:
        "https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?ga=GA1.1.1955477534.1725112092&semt=ais_hybrid",
    },
  ];

  res.status(200).json(products); // Corrected 'req' to 'res'
}
