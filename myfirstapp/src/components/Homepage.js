import React, { useEffect, useState } from 'react';
import './Homepage.css';
import WorkoutSlogans from './WorkoutSlogans';
import './Glassmorphism.css';
const Homepage = () => {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [showBackgroundChange, setShowBackgroundChange] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const infoSection = document.querySelector('.info');
      const infoSectionBottom = infoSection.offsetTop + infoSection.offsetHeight;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const zoomThreshold = 300;
      setIsZoomed(scrollTop > zoomThreshold);

      if (scrollTop > infoSectionBottom - windowHeight && shouldAnimate) {
        setShouldAnimate(false);
        setShowBackgroundChange(true);
      } else if (scrollTop < infoSectionBottom - windowHeight && !shouldAnimate) {
        setShowBackgroundChange(false);
      }

    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [shouldAnimate]);


  return (
    <div>
      <header>
        <div className="container">
          <div className="left-section">
            <h1>Workout Buddy</h1>
          </div>
          <div className="right-section">
            <button className="button">Login</button>
            <button className="button">Signup</button>
          </div>
        </div>
      </header>

      <section className="image-section">
        <div className={`image-container ${isZoomed ? 'zoomed-in' : 'zoomed-out'}`}>
          <img
            src="https://media.istockphoto.com/id/1367160990/photo/athletic-couple-pumping-up-muscles-with-dumbbells-outdoors.jpg?s=612x612&w=0&k=20&c=BkiscUjTuiiirWft6cYwrFq5E664_IxzyJGRkOyQSbY="
            alt="Fitness Image"
            className="fitness-image"
          />
          <div className="image-overlay">
            <h2>Track, Train, Transform</h2>
            <p>Your Journey to Fitness</p>
          </div>
        </div>
      </section>

      <div className={showBackgroundChange ? 'change-bg-color' : ''}>
        <section className="workout-routines" style={{ marginTop: '30px' }}>
          <h2 className="carousel-heading" style={{ fontSize: '55px' }}>Motivation</h2>
          <div className="container" style={{ marginBottom: '3%' }}>
            <div className="carousel">
              {/* Workout cards go here */}
              <div className="workout-card">
                <img src="https://www.health.com/thmb/8otAZglU9PONAQ_yH_GmWGpzTyI=/500x333/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Health-GettyImages-1336700535-9ef0d2f2dc8d466aa7346d1bfd79aa98.jpg" alt="Workout 1" />
                <h3>Cardio Blast</h3>
                <p>A high-intensity cardio workout to get your heart pumping and calories burning.</p>
              </div>
              <div className="workout-card">
                <img src="https://aminoco.com/cdn/shop/articles/FeaturedImage_StrengthTraining.jpg?v=1593102095" alt="Workout 2" />
                <h3>Strength Training</h3>
                <p>Build muscle and increase strength with this effective strength training routine.</p>
              </div>
              <div className="workout-card">
                <img src="https://th.bing.com/th/id/OIP.0w55Vzr8NidcZgKOC1UCiAHaE8?pid=ImgDet&rs=1" alt="Workout 3" />
                <h3>Yoga Flow</h3>
                <p>Relax and rejuvenate with this calming yoga routine.</p>
              </div>
              <div className="workout-card">
                <img src="https://www.welcometotheonepercent.com/wp-content/uploads/2017/09/HIIT2.png" alt="Workout 4" />
                <h3>HIIT Workout</h3>
                <p>High-Intensity Interval Training for maximum calorie burn.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="cardContainer" style={{ marginTop: '4%' }}>
        <section className="info">
          <div>
            <h2>Why Gym is Important?</h2>
            <p>We're your ultimate fitness destination, driven by a passion to help you reach your fitness aspirations through effective workouts and a dedication to a healthy lifestyle.</p>
            <p>Join us on this exhilarating fitness adventure and unlock your potential!</p>
          </div>
          <div className="sliding-images">
            {/* Add your sliding images here */}
            <img src="https://plus.unsplash.com/premium_photo-1666736568166-526adac23603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80.jpg" alt="Image 1" />
            <img src="https://plus.unsplash.com/premium_photo-1663050901483-ee8703cc8372?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80.jpg" alt="Image 2" />
            <img src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80.jpg" alt="Image 3" />
          </div>
        </section>
      </div>
      <section className="cardContainer1" style={{ marginTop: '15%' }}>
        <div className="card" style={{ marginBottom: '13%' }}> {/* Add your card class for styling */}
          <img src="https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80.jpg" alt="Card Image" />
          <img src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80.jpg" alt="Card Image" />
          <img src='https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80.jpg' alt='Card Image' />
          <img src='https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80.jpg' alt='Card Image' />
          <div className="overlayImage">
            <img src='https://media.istockphoto.com/id/619088796/photo/fitness-girl-lifting-dumbbell-in-the-morning.jpg?s=612x612&w=0&k=20&c=m8gUYPVV1ZfWpfjrKjzWn-a8DVHnw1hGp-rjh6c40f0=' alt='Centered Image' />
            <div class="overlayText">
              <h3>Routines, workouts</h3>
              <p>Additional information or description goes here</p>
            </div>
          </div>
        </div>
        {/* Add more cards as needed */}
      </section>

      <div className="container">
        <div className="glass" style={{ '--r': -15 }} data-text="Training">
          <span class="material-symbols-outlined" style={{ fontSize: '5em' }}>
            exercise
          </span>
        </div>
        <div className="glass" style={{ '--r': 5 }} data-text="Workout">
          <span class="material-symbols-outlined" style={{ fontSize: '5em' }}>
            fitness_center
          </span>
        </div>
        <div className="glass" style={{ '--r': 25 }} data-text="Monitor Weight ">
          <span class="material-symbols-outlined" style={{ fontSize: '5em' }}>
            monitor_weight_gain
          </span>
        </div>
        <div className="glass" style={{ '--r': -15 }} data-text="Self Improvement">
          <span class="material-symbols-outlined" style={{ fontSize: '5em' }}>
            self_improvement
          </span>
        </div>
      </div>
      <div className="cardContainer2" style={{ marginBottom: '5%' }}>
        <section className="info1">
          <div className="image-container">
            <img src="https://thelatest.modere.eu/wp-content/uploads/2023/04/Copy-of-US_Lean-Body-System_IG_FB_052622-1000-%C3%97-700px-540x700.png" alt="Fitness Icon" />
          </div>
          <div className="text-container">
            <h2 style={{ marginLeft: 0 }}>Bring the gym home</h2>
            <ul>
              <li style={{ fontFamily: 'revert-layer', fontSize: '25px', color: '#ff4dd2'}}>
                Unlimited access to at-home workouts, bringing the fitness experience to the comfort of your home
              </li>
            </ul>
            <p style={{ fontFamily: 'serif' }}>Join us and log your workouts now</p>
            <button className="customButton"><a href="/routines">ROUTINES</a></button>
          </div>
        </section>
      </div>

      <WorkoutSlogans />

      <div className={showBackgroundChange ? 'change-bg-color' : ''}>

      </div>

      <div />
      <script src="script.js"></script>
    </div>
  );
};

export default Homepage;
