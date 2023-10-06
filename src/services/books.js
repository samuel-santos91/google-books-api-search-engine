const googleBooks = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Something Went Wrong");
  }
  const data = await response.json();
  if(data.items.length === 0) {
    throw new Error("No Books Were Found");
  }
  return data.items;
};

export default googleBooks;
