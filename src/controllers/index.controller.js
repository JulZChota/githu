

const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
  res.render('index');
};

indexCtrl.renderAbout = (req, res) => {
  res.render('about');
};

indexCtrl.renderHome = (req, res) => {
  res.render('home');
};

indexCtrl.renderpedir = (req, res) => {
  res.render('pedir');
};

indexCtrl.renderInfo = (req, res) => {
  res.render('Info');
};

module.exports = indexCtrl;