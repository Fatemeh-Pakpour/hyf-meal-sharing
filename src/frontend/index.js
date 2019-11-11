import "./index.css";

import SPARouter from "@kodnificent/sparouter";

import mealRouter from "./pages/meals";
import homeRouter from "./pages/home";
import reviewRouter from "./pages/review";
// import mealRouter from "./pages/meal";

const options = {
  historyMode: true // set this to true if you use the HTML5 history mode API
};
const router = new SPARouter(options);

router.get("/", homeRouter);
router.get("/meals", mealRouter);
router.get("/reviews", reviewRouter);
// router.get("/meal/{id}", mealRouter);

router.init();
