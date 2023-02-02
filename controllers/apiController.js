const apiController = {
  index(req, res, next) {
    res.json(res.locals.data.vlogs)
  },
  show(req, res, next) {
    res.json(res.locals.data.vlog)
  }
}

// We only need Index and Show because we are currently only ever showing a list of plogs
// Or we are showing a single fruit

module.exports = apiController
