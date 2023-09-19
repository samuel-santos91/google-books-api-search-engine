const googleBooks = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Something Went Wrong");
  }
  const data = await response.json();
console.log(data)
  return data.items;
};

export default googleBooks;
