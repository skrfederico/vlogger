const express = require('express')
const router = express.Router()

// Data controller
const dataController = require('./dataController')
const viewController = require('./viewController')
const apiController = require('./apiController')

router.use((req, res, next) => {
  // console.log('session', req.session)
  if (req.session.loggedIn) {
    next()
  } else {
    res.redirect('/user/login')
  }
})

//API ROUTES -
//index (dataController.index)
router.get('/api', dataController.index, apiController.index)

//show (dataController.show)
router.get('/api/:id', dataController.show, apiController.show)

//delete (dataController.destroy)
router.delete('/api/:id', dataController.destroy, apiController.show)

//update (dataController.update)
router.put('/api/:id', dataController.update, apiController.show)

//create (dataController.create)
//post request doesn't need id after /api/
router.post('/api/', dataController.create, apiController.show)

//
// NEW routes
// Index
router.get('/', dataController.index, viewController.index)
// Search Index
router.get('/search', dataController.index, viewController.indexforsearch)

// New
router.get('/new', viewController.newView)
// Delete
router.delete('/:id', dataController.destroy, viewController.redirectHome)
// Update
router.put('/:id', dataController.update, viewController.redirectShow)
// Create
router.post('/', dataController.create, viewController.redirectHome)
// Edit
router.get('/:id/edit', dataController.show, viewController.edit)
// Show
router.get('/:id', dataController.show, viewController.show)

module.exports = router

/**
// OLD ROUTES
//redirect
router.get('/', (req, res) => {
  res.redirect('/vlogs')
})

// Index - route
router.get('/vlogs', (req, res) => {
  Vlog.find({}, (error, allVlogs) => {
    res.render('vlogs/Index', {
      vlogs: allVlogs
    })
  })
})

// Index for Search - route
router.get('/search', (req, res) => {
  Vlog.find({}, (error, allVlogs) => {
    res.render('vlogs/Searchindex', {
      vlogs: allVlogs
    })
  })
})

// New
router.get('/vlogs/new', (req, res) => {
  res.render('vlogs/New')
})

// Show - Route
router.get('/vlogs/:id', (req, res) => {
  const { id } = req.params

  Vlog.findById(id, (error, foundVlog) => {
    if (error) {
      console.log(error)
    }
    console.log(foundVlog)
    res.render('vlogs/Show', {
      //vlog: foundVlog
      title: foundVlog.title,
      date: foundVlog.date,
      body: foundVlog.body,
      createdAt: foundVlog.createdAt,
      _id: foundVlog._id
    })
  })
})

// Edit - route
router.get('/vlogs/:id/edit', (req, res) => {
  const { id } = req.params

  Vlog.findById(id, (err, foundVlog) => {
    res.render('vlogs/Edit', {
      _id: foundVlog._id,
      title: foundVlog.title,
      date: foundVlog.date,
      body: foundVlog.body,
      content: foundVlog.content
    })
  })
})

// Create
router.post('/vlogs/', (req, res) => {
  const { title, date, body } = req.body
  // console.log(req.body)
  if (req.body.newContent === 'on') {
    //if checked, req.body.newContent is set to 'on'
    req.body.newContent = true
  } else {
    //if not checked, req.body.newContent is undefined
    req.body.newContent = false
  }
  Vlog.create(req.body, (error, createdVlog) => {
    //Vlog.create({ title, body }, (error, createdVlog) => {
    // console.log(req.body)
    console.log(createdVlog)
    // //console.error(error)
    // if (!err) {
    //   console.log(createdVlog)

    //   res.redirect(`/blog/${createdVlog._id}`)
    //   return
    // }
    res.redirect('/vlogs/') // sends to /logs get route
  })
})

// Update - route
router.put('/vlogs/:id', (req, res) => {
  console.log(req.body.body)
  // UPDATE
  //res.send('Should update one log by id')
  if (req.body.newContent === 'on') {
    req.body.newContent = true
  } else {
    req.body.newContent = false
  }
  Vlog.findByIdAndUpdate(req.params.id, req.body, (err, updatedVlog) => {
    if (err) {
      return res.send({ error: err })
    }
    console.log('updatedVlog', updatedVlog)
    res.redirect(`/vlogs/${req.params.id}`)
  })
})

// DELETE
router.delete('/vlogs/:id', (req, res) => {
  console.log(req.params.id)
  Vlog.findByIdAndDelete(req.params.id, (error, deletedVlog) => {
    // if (!error) {
    console.log(req.params.id)
    console.log('Deleted vlog post', { deletedVlog })
    res.redirect('/vlogs')
  })
  // res.status(400).send('Try again later...')
})
// })
**/
