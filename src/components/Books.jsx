import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import Cart from "./Cart";

const Books = () => {

    
    const navigation = useNavigation();
  if(navigation.state === 'loading'){
    return <LoadingSpinner></LoadingSpinner>
  }

  const { books } = useLoaderData();
  console.log(books);
  return (
    <div className="my-container">
      <div className="grid gap-6 mb-8 xs:w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
            books.map(book => <Cart book={book} key={book.isbn13}></Cart>)
        }
      </div>
    </div>
  );
};

export default Books;
