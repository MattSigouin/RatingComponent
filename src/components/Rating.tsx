import styles from './Rating.module.css'
import {useState} from 'react'

export function Rating(){ 
    const [selectedRating, setSelectedRating] = useState<number>()

    function handleRatingClicked(rating: number) {
        setSelectedRating(rating)
    }



return <div>
    
<main className="flex min-h-screen bg-very-dark-blue items-center flex-col justify-center font-overpass">
<div className={styles.card}>
  
    <img className={styles.star} src="/icon-star.svg" alt=""></img>
  
  <h1 className={styles.header}>
    How did we do?
    </h1>

  <p className={styles.description}> 
     Please let us know how we did with your support request.
    All feedback is appreciated to help us improve our offering!
  </p>

{selectedRating}

<div className={styles.group}>
    {[1,2,3,4,5].map((rating) =>(
        <button 
    onClick={() => handleRatingClicked(rating)}
    className={styles.rating}>
        {rating}</button>
    ))}
</div>


<div>
  <button className={styles.submit}>SUBMIT</button>
</div>
  

</div>

</main>
</div>
}