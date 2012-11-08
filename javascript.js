var beer, _ref;

if (beer.bad) {
  "Not Great";
} else {
  "Delicious";
}

if (!beer.bad) {
  beer = "Delicious";
}

beer = (_ref = beer.bad) != null ? _ref : {
  "Not Great": "Delicious"
};

if (beer.bad && beer.tasty) {
  "Really Great Beer";
}
