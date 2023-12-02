<script>
  /**
   * @type {any}
   */
  export let title;
</script>

<div class="polaroid">
  <div class="polaroid-inner">
    <div class="polaroid-front">
      <img
        class="polaroid-image"
        src="images/profile.png"
        alt="Jordan's Profile"
        width="210"
      />
      <h2>{title}</h2>
    </div>
    <div class="polaroid-back">
      <h4>Computer Science</h4>
      <h4>University of Toronto</h4>
      <h4>Class of 2025</h4>
      <br />
      <img
        class="polaroid-back-image"
        src="images/uoft.png"
        alt="University of Toronto Logo"
      />
    </div>
  </div>
</div>

<style>
  h2 {
    font-size: 25px;
    color: black;
    margin: 0;
    padding-top: 10px;
  }

  h4 {
    font-size: 20px;
    color: black;
    margin: 0;
    padding-top: 10px;
  }

  .polaroid {
    background-color: transparent;
    margin: 20px 0px 20px 0px;
    text-align: center;
    margin: 20px;
    width: 250px;
    height: 350px;
    transition: 0.7s;
    perspective: 1000px;
  }

  .polaroid-inner {
    background-color: white;
    border: 10px solid white;
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.7s;
    transform-style: preserve-3d;
  }

  .polaroid-inner:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .polaroid:hover > .polaroid-inner {
    transform: rotateY(180deg);
  }

  .polaroid-front,
  .polaroid-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .polaroid-image {
    width: 250px;
  }

  .polaroid-back-image {
    width: 150px;
  }

  .polaroid-back {
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
  }
</style>
