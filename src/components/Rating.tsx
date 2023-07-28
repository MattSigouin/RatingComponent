import styles from './Rating.module.css'
import { useState } from 'react'

export function Rating(){ 
    const [selectedRating, setSelectedRating] = useState<number>()
    const [isSubmitted, setIsSubmitted] = useState(false)

    function handleRatingClicked(rating: number) {
        setSelectedRating(rating)
    }

function handleFormSubmitted(e: React.FormEvent) {
  e.preventDefault();
  setIsSubmitted(true);
}


return isSubmitted ? (
<div className={styles.thankYouCard}>
  <img src="/thanks.svg" alt=""></img>
  <p className={styles.selected}>You selected {selectedRating} out of 5</p>

  <h1 className={styles.header}>
    Thank you!
    </h1>

  <p className={styles.description}> 
     We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
  </p>
</div>)
:
(
    

<form onSubmit={handleFormSubmitted} className={styles.card}>
    <img className={styles.star} src="/icon-star.svg" alt=""></img>
  
  <h1 className={styles.header}>
    How did we do?
    </h1>

  <p className={styles.description}> 
     Please let us know how we did with your support request.
    All feedback is appreciated to help us improve our offering!
  </p>


<div className={styles.group}>
  {/*Changed buttons to be dynamic by mapping an array. Can change number of ratings if wanted */}
    {[1,2,3,4,5].map((rating) =>(
        <button 
    type="button"
    onClick={() => handleRatingClicked(rating)}
    className={styles.rating}>
        {rating}
        </button>
    ))}
</div>


<div>
  <button disabled={selectedRating === undefined} className={styles.submit}>SUBMIT</button>
</div>
  

</form>

)}