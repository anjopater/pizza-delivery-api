
const Pizza = require('../models/pizza');

exports.save = function (req, res) {
  let pizza = new Pizza();

  const { _id, name, price, imageUrl } = req.body;

  pizza.name = name;
  pizza.id = _id;
  pizza.imageUrl = imageUrl;
  pizza.price = price;

  pizza.save((err, data) => {
    console.log(data);
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
};

exports.all = function (req, res) {
  Pizza.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
};

exports.update = function (req, res) {
  const { _id } = req.body;
  Pizza.findByIdAndUpdate(_id, req.body, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
}

exports.delete = function (req, res) {
  const { _id } = req.body;
  Pizza.findByIdAndRemove(_id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
}