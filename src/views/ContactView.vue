<!-- HTML -->
<template>
  <div class="contact body vh-1000 w-100">
    <div class="contact-container" style="font-family: 'Manrope', sans-serif">
      <div class="contact-heading">
        <h1
          style="
            font-family: 'Manrope', sans-serif;
            display: flex;
            justify-content: center;
            padding-top: 50px;
            color: white;
          "
        >
          Contact Me
        </h1>
        <p
          style="
            font-family: 'Manrope', sans-serif;
            display: flex;
            justify-content: center;
            color: white;
          "
        >
          Let's Have Coffee
        </p>
      </div>
    </div>
    <!-- Icons -->
    <div class="icon-container row" style="padding-top: 20px">
      <!-- Location -->
      <div class="icon-1 col">
        <!-- <i class="fa-solid fa-map-pin" style="color: #ffdb58"></i> -->
        <p style="font-family: 'Manrope', sans-serif; color: white">
          <i class="fa-solid fa-map-pin" style="color: #ffdb58"></i>
          Mitchell's Plain, Cape Town, 7785
        </p>
      </div>
      <!-- Phone Number -->
      <div class="icon-2 col">
        <!-- <i class="fa-solid fa-mobile" style="color: #ffdb58"></i> -->
        <p style="font-family: 'Manrope', sans-serif; color: white">
          <i class="fa-solid fa-mobile" style="color: #ffdb58"></i>+27 76 077
          5241
        </p>
      </div>
      <!-- Email -->
      <div class="icon-3 col">
        <!-- <i class="fa-solid fa-paper-plane" style="color: #ffdb58"></i> -->
        <p style="font-family: 'Manrope', sans-serif; color: white">
          <a style="text-decoration: none; color: white;"target="_blank" href="mailto:johnsontyhiesha@gmail.com"><i class="fa-solid fa-paper-plane" style="color: #ffdb58"></i>
          johnsontyhiesha@gmail.com</a>
        </p>
      </div>
    </div>
    <!-- Bootstrap Form -->
    <div id="form-container" class="form-container">
      <form
        class="needs-validation contactForm"
        id="contactForm"
        novalidate
        action="https://formspree.io/f/xnqkenro" target="_blank"
        method="POST"
      >
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label
              for="validationCustom01"
              style="font-family: 'Manrope', sans-serif"
              >First name</label
            >
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              name="firstName"
              placeholder="First name"
              value="Jane"
              style="font-family: 'Manrope', sans-serif"
              required
            />
            <div
              class="valid-feedback"
              style="font-family: 'Manrope', sans-serif"
            >
              Looks good!
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label
              for="validationCustom02"
              style="font-family: 'Manrope', sans-serif"
              >Last name</label
            >
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              name="lastName"
              placeholder="Last name"
              value="Doe"
              style="font-family: 'Manrope', sans-serif"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4 mb-3">
            <label
              for="validationCustom03"
              style="font-family: 'Manrope', sans-serif"
              >Phone Number</label
            >
            <input
              type="text"
              class="form-control"
              id="validationCustom03"
              name="phoneNumber"
              placeholder="Phone Number"
              style="font-family: 'Manrope', sans-serif"
              required
            />
            <div
              class="invalid-feedback"
              style="font-family: 'Manrope', sans-serif"
            >
              Please provide a valid phone number.
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label
              for="validationCustom04"
              style="font-family: 'Manrope', sans-serif"
              >Comment</label
            >
            <input
              type="text"
              class="form-control"
              id="validationCustom04"
              name="comment"
              placeholder="Comment"
              style="font-family: 'Manrope', sans-serif"
              required
            />
            <div
              class="invalid-feedback"
              style="font-family: 'Manrope', sans-serif"
            >
              Let Me Know?
            </div>
          </div>
        </div>
        <button
          class="btn btn-"
          type="submit"
          style="font-family: 'Manrope', sans-serif; background-color: #ffdb58"
        >
          Submit form
        </button>
      </form>
    </div>
    <!-- End of Form -->
  </div>
</template>

<!-- JavaScript -->
<script></script>

<!-- CSS -->
<style scoped>
.body {
  background-color: #202020;
  z-index: -100;
  overflow: hidden;
}

.icon-2 {
  padding-left: 90px;
}

.icon-container {
  display: flex;
  justify-content: center;
  padding-left: 200px;
}

.icon-container .col:hover {
  transform: scale(1.2);
  transition: transform 0.3s ease-in-out;
}

#form-container {
  width: 550px;
  height: 500px;
  border-radius: 24px;
  margin-top: 100px;
  margin-left: 500px;
  margin-bottom: 100px;
  background-color: #3b3b3b;
  box-shadow: 10px 10px 5px #ffdb58;
}

form {
  width: 100%;
  z-index: -1000;
  color: white;
  /* padding: 100px; */
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-left: 120px;
  padding-right: 90px;
  padding-top: 59px;
}

input,
.btn {
  width: 280px;
}

@media screen and (max-width: 600px) {
  .body {
    background-color: #202020;
    /* position: absolute; */
    z-index: -100;
    overflow: hidden;
  }

  .icon-2 {
    padding-left: none;
  }

  .icon-container {
    display: flex;
    /* justify-content: center; */
    place-content: center;
    text-align: center;
    flex-wrap: wrap;
    padding-left: 2px;
    margin: 0 auto;
    font-size: small;
  }

  .icon-container .col:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease-in-out;
  }

  #form-container {
    width: 300px;
    height: 500px;
    border-radius: 24px;
    margin-top: 100px;
    margin-left: 1px;
    margin-bottom: 100px;
    background-color: #3b3b3b;
    margin: 0 auto;
  }

  form {
    padding-left: 10px;
    padding-top: 75px;
    z-index: -1000;
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
  #form-container {
    margin-top: 50px;
    margin-bottom: 90px;
  }
}

/* Laptop */
@media screen and (max-width: 480px) {
   #form-container {
    width: 300px;
    height: 500px;
    border-radius: 24px;
    margin-top: 100px;
    margin-left: 1px;
    margin-bottom: 100px;
    background-color: #3b3b3b;
    margin: 0 auto;
  }
}

@media screen and (max-width: 834px) {
  
}
</style>
