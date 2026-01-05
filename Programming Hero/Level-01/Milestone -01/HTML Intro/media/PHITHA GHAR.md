<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Phitha ghar</title>
    <style>
      form .basic-info label {
        display: block;
        margin-top: 15px;
      }
    </style>
  </head>
  <body>
    <header></header>
    <main>
      <section>
        <h2>Jamal Mother Pitha ghar</h2>
        <form>
          <fieldset class="basic-info">
            <legend>Basic Info</legend>
            <label for="name">Your name</label>
            <input type="text" name="" id="name" />
            <!-- for means id -->
            <label for="email">Your Email</label>
            <input type="email" name="" id="email" />
            <!-- <label for=""><input type="text" name="" id="" /></label> -->
          </fieldset>
          <fieldset>
            <legend>Pitha Info</legend>
            <input type="radio" name="Pitha" id="Chitoy" />
            <label for="Chitoy">Chitoy</label>
            <input type="radio" name="Pitha" id="Vapa" />
            <label for="Vapa">Vapa</label>
            <input type="radio" name="Pitha" id="pori" />
            <label for="pori">Dal pori</label>
            <!-- alt+down arrow : line up and down -->
          </fieldset>
          <fieldset>
            <legend>Vorta Selection</legend>
            <input type="checkbox" name="Vorta" id="Sorisa" />
            <label for="Sorisa">Sorisa</label>
            <input type="checkbox" name="Vorta" id="Shutki" />
            <label for="Shutki">Shutki</label>
            <input type="checkbox" name="Vorta" id="Morich" />
            <label for="Morich">Morich</label>
          </fieldset>
          <fieldset>
            <legend>Extra</legend>
            <textarea cols="50" rows="4" name="" id=""></textarea>
          </fieldset>
          <input type="submit" value="Submit" />
          <input type="reset" value="Clear" />
        </form>
      </section>
    </main>
    <footer></footer>
  </body>
</html>
