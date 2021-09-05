// @desc: Get all transactions
// @route: GET /api/vi/transactions
// @access: Public

exports.getTransactions = (req, res, next) => {
  res.send('GET transactions')
}

// @desc: Add transaction
// @route: POST /api/vi/transactions
// @access: Public

exports.addTransactions = (req, res, next) => {
  res.send('POST transaction')
}

// @desc: Delete transaction
// @route: DELETE /api/vi/transactions/:id
// @access: Public

exports.deleteTransactions = (req, res, next) => {
  res.send('DELETE transactions')
}