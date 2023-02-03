const RESOURCE_PATH = '/vlogs'

const viewController = {
  index(req, res) {
    res.render('vlogs/Index', res.locals.data)
  },
  indexforsearch(req, res) {
    res.render('vlogs/searchIndex', res.locals.data)
  },
  show(req, res) {
    res.render('vlogs/Show', res.locals.data)
  },
  edit(req, res) {
    res.render('vlogs/Edit', res.locals.data)
  },
  newView(req, res) {
    res.render('vlogs/New')
  },
  redirectHome(req, res) {
    res.redirect(RESOURCE_PATH)
  },
  redirectResults(req, res) {
    res.redirect(`/results?query=${req.params.query}`)
  },
  redirectShow(req, res) {
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  }
}

module.exports = viewController
