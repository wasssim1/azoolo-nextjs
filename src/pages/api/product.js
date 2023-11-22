export default (req, res) => {
  res.status(200).json({ name: 'Hey Azoolo', query: req.query });
};
