import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";

function ReviewItemForm({ onAddReview}) {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const textareaRef = useRef(null);

   
  const handleSubmit = (e) => {
    e.preventDefault();
    const numericRating = parseInt(rating);

    // Validate rating between 1–5
    if (!numericRating || numericRating < 1 || numericRating > 5) {
      alert("Please enter a rating between 1 and 5.");
      return;
    }

    // const newReview = {
    //   comment,
    //   rating: numericRating,
    //   date: new Date().toISOString(),
    // };

    onAddReview({comment,rating:numericRating});

    //reset fields
    setComment("");
    setRating("");
  };

  const handleComment = (e) => {
    e.preventDefault();
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
    setComment(e.target.value);
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="flex bg-[#f2f2f2] items-center p-2 rounded-md w-[50%] justify-between"
    >
      <input
        className="w-16 p-2 rounded-md"
        type="number"
        placeholder="(1-5)"
        value={rating}
        min={1}
        max={5}
        onChange={(e) => setRating(e.target.value)}
      />
      <textarea
        ref={textareaRef}
        className="w-[74%] h-full bg-[#f2f2f2] focus:outline-none focus:border-none py-4 my-2"
        name="review"
        id="review"
        placeholder="write your review..."
        value={comment}
        onChange={handleComment}
      />
      <button className="rounded bg-black text-white p-2" type="submit">
        Submit
      </button>
    </form>
  );
}

function ReviewList({ reviews }) {
  return (
    <div className="flex  w-[50%] ">
      { reviews.length === 0  ? (
        <p className="">No reviews yet.</p>
      ) : (
        <ul className="flex flex-col mt-2 gap-2 w-full">
          {reviews.map((review, index) => {
             console.log('review: ',review);

             const formattedDate = review?.created_at ? new Date(review?.created_at).toLocaleDateString("en-IN", {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
             }) : 'Date not found!' ;


             return(
            <li
              className="flex flex-col rounded-md p-4 bg-[#f2f2f2] w-full h-auto"
              key={index}
            > 
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                <img className="rounded-full w-10 " src={review?.avatar ? review?.avatar :'https://dummyimage.com/50'} alt={review?.username || 'avatar'} />
                <p> {  review?.username ? review?.username : 'username'} </p>
                </div>
                <div className="flex items-center ">
                <strong className="flex items-center">
                {" "}
                {review?.rating || ''}
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </strong> 
               <span className="text-gray-400 mb-2 mx-2">.</span> 
               <span className="text-gray-400">{formattedDate}</span>
              </div>
              </div>
              <div className="w-full mt-2">
              {review?.comment || ''}
              </div>
            </li>
          )} 
          )}
        </ul>
      )}
    </div>
  );
}

function ProductReview({productId}) {
  const [reviews, setReviews] = useState([]);
  const {session,user} = useAuth();
  const token = session?.access_token ;
  const usernameFromEmail = user?.email.split('@')[0];
  const formatedUserName = usernameFromEmail?.charAt(0).toUpperCase() + usernameFromEmail?.slice(1).toLowerCase();
  // console.log(usernameFromEmail);
  //  console.log(reviews,'reviews');
  //  console.log(session)
  //  console.log('token',token)

  //add review
 const handleAddReviews = async({comment,rating}) => {
    if (!session) return alert("Please login to submit a review");

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/reviews/${productId}`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
      },
      credentials: 'include' ,
      body : JSON.stringify({
          comment,
          rating ,
          userEmail: user.email,
          username: user.user_metadata?.full_name || user.user_metadata.name || formatedUserName
        })
    });

    if (res.ok) {
      const data = await res.json();
      console.log('review add info-',data);
      setReviews(prev => [data.review,...prev]);
      fetchAllReviews();
    } else {
      console.error('Failed to add review');
    }
    
  };

 

  //fetch all reviews
  const fetchAllReviews = async()=>{
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/reviews/${productId}`);
    const data = await response.json();
    console.log('fetch all data',data)
    setReviews(data.reviews || []);
    } catch (error) {
      console.log('error fetching all reviews',error.message)
    }
    
  }
   
  useEffect(()=>{
  fetchAllReviews();
  },[productId])

  console.log("Fetched reviews for product:", productId, reviews);

  return (
    <div className="review bg-red-40 text-gray-800 font-normal">
      <ReviewItemForm  onAddReview={handleAddReviews} session={session} user={user} />
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default ProductReview;
