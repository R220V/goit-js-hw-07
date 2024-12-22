const categories = document.querySelectorAll("ul#categories .item");

console.log("Number of categories:", categories.length);

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;

  const items = category.querySelectorAll("li");

  console.log(`Categories: ${title}`);
  console.log(`Counts of elements: ${items.length}`);
});
